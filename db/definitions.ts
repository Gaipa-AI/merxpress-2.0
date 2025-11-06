//import { type } from 'os';

export type User = {
    id: string;
    name: string;
    email: string;
    password: string;
  };

export type Product = {
    id: string;
    price: number;
    originalPrice?: number;
    discount?: number;
    title: string;
    description: string;
    imageUrl: string;
    deals?: string; // Optional field for deals
    //liked?:boolean;
  };

export interface ProductCardProps {
    id: string;
    price: number;
    originalPrice?: number;
    discount?: number;
    title: string;
    description: string;
    imageUrl: string;
    deals?: string; // Optional field for deals
    //liked?:boolean;
  }

export interface DataCardProps{
  title: string; // title of product
  category: string; // category of product
  price: number; // price of product in INR
  imgs?:  string ; // array of images of product
  specs?: [string, string]; // Array or String of specs of product -> If Array, then render as list else if String, then render as single line
  inStock: number; // quantity in stock of product -> If 0, then hide from the store, or less than 10, then show a "Very few left" or play with this value
  eta: number; // estimated time of arrival of product in mins
  id: number; 
}
  
export interface ProductData {
    id: string;
    price: number;
    originalPrice?: number;
    discount?: number;
    title: string;
    description: string;
    imageUrl: string;
    //liked?:boolean;
  }
  
  export type CartItem = {
    id: number;
    product: Product;
    quantity: number;
  };
  
  export type Cart = {
    items: CartItem[];
  };
  
  export type Order = {
    id: string;
    total: number;
    //status: "pending" | "completed";
    status: string;
    items: CartItem[];
    user_id?: string;
  };
  
  export type OrderHistory = {
    orders: Order[];
  };
  
  export type State = {
    user: User | null;
    cart: Cart;
    orderHistory: OrderHistory;
  };
  
  export const initialState: State = {
    user: null,
    cart: {
      items: [],
    },
    orderHistory: {
      orders: [],
    },
  };
  
  export type Action =
    | { type: "login"; user: User }
    | { type: "logout" }
    | { type: "addToCart"; product: Product }
    | { type: "removeFromCart"; product: Product }
    | { type: "checkout" }
    | { type: "clearCart" }
    | { type: "placeOrder"; order: Order };
  
  export function reducer(state: State, action: Action): State {
    switch (action.type) {
      case "login":
        return {
          ...state,
          user: action.user,
        };
      case "logout":
        return {
          ...state,
          user: null,
        };
      case "addToCart":
        return {
          ...state,
          cart: {
            items: [
              ...state.cart.items,
              {
                product: action.product,
                quantity: 1,
                id:1,
              },
            ],
          },
        };
      case "removeFromCart":
        return {
          ...state,
          cart: {
            items: state.cart.items.filter(
              (item) => item.product.id !== action.product.id
            ),
          },
        };
      case "checkout":
        return {
          ...state,
          orderHistory: {
            orders: [
              ...state.orderHistory.orders,
              {
                id: Math.random().toString(36).substr(2, 9),
                items: state.cart.items,
                total: state.cart.items.reduce(
                  (total, item) => total + item.product.price * item.quantity,
                    0 
                ),
                status: "pending",
                },
                ],
                },
                cart: {
                items: [],
                },
                };
                case "clearCart":
                return {
                ...state,
                cart: {
                items: [],
                },
                };
                case "placeOrder":
                  return {
                    ...state,
                    orderHistory: {
                      orders: [...state.orderHistory.orders, action.order],
                    },
                    cart: {
                      items: [],
                    },
                  };
                default:
                  return state;
              }
            }


export type SessionPayload = {
  sessionId?: string;
  userId: string;
  ip_address?: string;
  payload?: string;
  last_activity?: Date;
  expiresAt: Date;
};


export type LatestInvoice = {
  id: string;
  name: string;
  image_url: string;
  email: string;
  amount: string;
};

export type LatestInvoiceRaw = Omit<LatestInvoice, 'amount'> & {
  amount: number;
};

export type Revenue = {
  month: string;
  revenue: number;
};


export type Customer = {
  id: string;
  name: string;
  email: string;
  image_url: string;
};

export type Invoice = {
  id: string;
  customer_id: string;
  amount: number;
  date: string;
  // In TypeScript, this is called a string union type.
  // It means that the "status" property can only be one of the two strings: 'pending' or 'paid'.
  status: 'pending' | 'paid';
};



export type InvoicesTable = {
  id: string;
  customer_id: string;
  name: string;
  email: string;
  image_url: string;
  date: string;
  amount: number;
  status: 'pending' | 'paid';
};

export type CustomersTableType = {
  id: string;
  name: string;
  email: string;
  image_url: string;
  total_invoices: number;
  total_pending: number;
  total_paid: number;
};

export type FormattedCustomersTable = {
  id: string;
  name: string;
  email: string;
  image_url: string;
  total_invoices: number;
  total_pending: string;
  total_paid: string;
};

export type CustomerField = {
  id: string;
  name: string;
};

export type InvoiceForm = {
  id: string;
  customer_id: string;
  amount: number;
  status: 'pending' | 'paid';
};