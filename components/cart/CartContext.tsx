'use client'
import React, { createContext, useContext, useReducer, ReactNode } from "react";
import { CartItem } from "@/lib/cart";
import { useEffect } from "react";
import ClientStorage from "@/lib/clientStorage";

interface CartState {
  items: CartItem[];
  total: number;
}

type CartAction =
  | { type: "ADD_ITEM"; payload: CartItem }
  | { type: "REMOVE_ITEM"; payload: string } // id of the item
  | { type: "CLEAR_CART" }
  | { type: "LOAD_FROM_STORAGE"; payload: CartState };

const initialCartState: CartState = {
  items: [],
  total: 0,
};



function cartReducer(state: CartState, action: CartAction): CartState {
  //const savedCart = JSON.parse(window.localStorage.getItem("cart") || "{}") || initialCartState;

  switch (action.type) {
    case "ADD_ITEM": {
      const existingItem = state.items.find(item => item.id === action.payload.id);
      let updatedItems;

      if (existingItem) {
        updatedItems = state.items.map(item =>
          item.id === action.payload.id
            ? { ...item, quantity: item.quantity + action.payload.quantity }
            : item
        );
      } else {
        updatedItems = [...state.items, action.payload];
      }

      const newTotal = updatedItems.reduce(
        (acc, item) => acc + item.price * item.quantity,
        0
      );
      
      return { items: updatedItems, total: newTotal };
    }

    case "REMOVE_ITEM": {
      const updatedItems = state.items.filter(item => item.id !== action.payload);
      const newTotal = updatedItems.reduce(
        (acc, item) => acc + item.price * item.quantity,
        0
      );
     
      return { items: updatedItems, total: newTotal };
    }

    case "CLEAR_CART":
      return initialCartState;
    case "LOAD_FROM_STORAGE": {
      return action.payload;
    }

    default:
      return state;
  }
}


const CartContext = createContext<{
  state: CartState;
  dispatch: React.Dispatch<CartAction>;
  cartCount: number | null | undefined;
}>({
  state: initialCartState,
  dispatch: () => null,
  cartCount: 0,
});

export const CartProvider = ({ children }: { children: ReactNode }) => {
    const [state, dispatch] = useReducer(cartReducer, initialCartState);

    useEffect(() => {
      const savedCart = ClientStorage.getItem('cart');
      if (savedCart) {
        dispatch({ type: 'LOAD_FROM_STORAGE', payload: JSON.parse(savedCart) });
      }
      
    }, []);

    useEffect(() => {
      ClientStorage.setItem('cart', JSON.stringify(state));
    }, [state]);
    // useEffect(() => {
    //   if (typeof window !== 'undefined') {
    //     const savedCart = JSON.parse(localStorage.getItem('cart') || '{}') || initialCartState;
    //     dispatch({ type: 'LOAD_FROM_STORAGE', payload: savedCart });
    //   }
    // }, []);
    // useEffect(() => {
      
    //   localStorage.setItem("cart", JSON.stringify(state));
      
    // }, [state]);
    

  
  return (
    <CartContext.Provider value={{ state, dispatch, cartCount: state.items.length  }}>
      {children}
    </CartContext.Provider>
  );
};

//export const useCart = () => useContext(CartContext);
export const useCart = () => {
  if (CartContext === undefined) {
    throw new Error("useCart must be used within a CartProvider");
  }
    return useContext(CartContext);
}

