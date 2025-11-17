'use client'

import { useCart } from "./CartContext";
import Image from "next/image";
import { toast } from "sonner";
import { Trash2 } from "lucide-react";
import {
    Tooltip,
    TooltipContent,
    TooltipTrigger,
    TooltipProvider,
  } from '@/components/ui/tooltip'

//import { setOrder } from "@/db/actions";
import PayPalButton from "../pay/PayPalButton";
//import { Button } from "../ui/button";
//import PayPal from "../pay/PayPal";
//import { Items } from "../Items";

export const CartPage = () => {
  const { state, dispatch } = useCart();
  

  const removeItem = (id: string) => {
    dispatch({ type: "REMOVE_ITEM", payload: id });
    toast.error('Item removed from cart',{position:'top-right', duration:2000, style:{backgroundColor:'white',color:'red',border:'2px solid white',borderRadius:'10px', boxShadow:'0 0 10px red'}});
  };

  const clearCart = () => {
    dispatch({ type: "CLEAR_CART" });
    toast.error('Cart cleared',{position:'top-right', duration:2000,style:{backgroundColor:'white',color:'red',border:'2px solid white',borderRadius:'10px', boxShadow:'0 0 5px red'}});
  };

  const checkOut = () => {
    //setOrder(state.total,state.items);
    //dispatch({ type: "CLEAR_CART" });
    toast.success('Order placed successfully',{position:'top-right', duration:2000,style:{backgroundColor:'white',color:'green',border:'2px solid white',borderRadius:'10px', boxShadow:'0 0 5px green'}});
  }

  return (
    <div className="p-4 min-h-screen relative">
      <h1 className="text-2xl text-slate-700 items-center justify-center">Your Cart</h1>
      {state.items.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <div className="flex flex-row flex-wrap justify-between">
          {state.items.map(item => (
            <div key={item.id} className="bg-white p-4 my-4 rounded-lg shadow-md justify-between items-center text-slate-700 w-1/4 mx-2">
              <img src={item.imageUrl} alt={item.title} className="w-full min-w-62 object-contain mb-4" />
              {/* <Image src={`/${item.imageUrl}` } alt={item.title} height={250} width={200} className="w-full object-contain mb-4" /> */}
              <p className="gap-2.5 self-start text-xl whitespace-nowrap ">${item.price} x {item.quantity}</p>
              <p className="text-lg mb-2 text-slate-900">{item.title}</p>
              
              <TooltipProvider>
                <Tooltip>
                <TooltipTrigger asChild>
                  <Trash2 role="button" className="stroke-red-500  bottom left-12" onClick={() => removeItem(item.id)}/>

                </TooltipTrigger>
                <TooltipContent sideOffset={5} className="transform -translate-x-[-2/3] bg-gray-500/90 bottom right-0 text-white p-4 rounded shadow-sm p-2 rounded-lg ">
                  Remove item from cart
                </TooltipContent>
                </Tooltip>
              </TooltipProvider>
              
            </div>
          ))}
          <div className="flex flex-col relative">
          <h3 className=" text-2xl text-slate-700">Total: ${state.total.toFixed(2)}</h3>
          <button onClick={clearCart} className="bg-red-600 text-white p-2 rounded-lg">Clear Cart</button>
          <button className="bg-blue-500 text-white p-2 rounded-lg mt-2 mb-2" onClick={checkOut}>
            CheckOut
          </button>
          <PayPalButton/>
          <div className="m-2 "/>
         
          {/* <PayPal/> */}
          </div>
        </div>
        
      )}
    </div>
  );
};

export default CartPage;
