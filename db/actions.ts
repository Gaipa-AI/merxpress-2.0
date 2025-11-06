"use server";
import { neon } from "@neondatabase/serverless";
import { Product } from './definitions';
import { Order } from './definitions';
import ClientStorage from '@/lib/clientStorage';
import { signIn } from '@/auth';
import { AuthError } from 'next-auth';

const db_key =process.env.DATABASE_URL;

export async function authenticate(
  prevState: string | undefined,
  formData: FormData,
) {
  try {
    await signIn('credentials', formData);
  } catch (error) {
    if (error instanceof AuthError) {
      switch (error.type) {
        case 'CredentialsSignin':
          return 'Invalid credentials.';
        default:
          return 'Something went wrong.';
      }
    }
    throw error;
  }
}


const ITEMS_PER_PAGE = 6;
export async function validateRegister(name: string, email: string, password: string, password_confirmation: string) {
  
  try {
    const response = await fetch(`${process.env.BACKEND_URL}/api/register`, {
      method: "POST",
      mode: "cors", // Ensure CORS is enabled
      headers: {
        "Content-Type": "application/json",
       
      },
      body: JSON.stringify({name, email, password, password_confirmation}),

    });
    
    //console.log(JSON.stringify({ name, email, password, password_confirmation }));
    //console.log(response);
    // Check if the response is ok (status in the range 200-299)
    if(response){
    console.log("Registration successful");
    // Assuming the response contains a token and user information
    const data = await response.json();
    //console.log("Register response: ", data);

    return data;
    }
  } catch (error) {
    // Handle network or parsing errors
    console.error("Registration error:", error);
    throw error;
  }
}

export async function validateLogin(email: string, password: string) {
  try {
    const response = await fetch(`${process.env.BACKEND_URL}/api/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",

      },
      body: JSON.stringify({ email, password }),

    });
    //console.log(JSON.stringify({ email, password }));
    //console.log(response);
    // Check if the response is ok (status in the range 200-299)
    if(response.ok){
    //console.log("Login successful");
    // Assuming the response contains a token and user information
    const data = await response.json();
    //console.log("Login response: ", data);
    
    return data;
    }

    if (!response.ok) {
      // Handle non-2xx HTTP responses
      const errorData = await response.json();
      //toast.error("Login failed: Wrong email or password");
      throw new Error(errorData.message || "Login failed");
      
    }

    // Parse and return the response data (e.g., token, user info)
    //return await response.json();
    
  } catch (error) {
    // Handle network or parsing errors
    throw error;
  }
}

export async function logout() {
  //'use server'
  try {
    const response = await fetch(`${process.env.BACKEND_URL}/api/logout`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      throw new Error('Logout failed');
    }
    // Clear user session or local storage using the safe helper function
    ClientStorage.removeItem('user');
    // Optionally, you can redirect or update the UI after logout
   console.log('Logout successful');
  } catch (error) {
    console.error('Logout error:', error);
  }
}

export async function searchProducts(
  query: string,
  currentPage: number
) {
  const offset = (currentPage - 1) * ITEMS_PER_PAGE;
  try {
    const response = await fetch(`${process.env.BACKEND_URL}/api/products/search?q=${query}&page=${currentPage}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      throw new Error("Search failed");
    }

    const data = await response.json();
    console.log("Search results:", data);
    return data;
  } catch (error) {
    console.error("Search error:", error);
    throw error;
  }

}

export async function getData() {
    
    if (!process.env.DATABASE_URL) {
        throw new Error("DATABASE_URL is not defined");
    }
    const sql = neon(db_key||'');

    const data = await sql`SELECT * FROM products`;
    console.log('Fetching product data...');
    return data as Product[];
}



export async function getOrder() {
    //const db_key =process.env.DATABASE_URL;
    if (!process.env.DATABASE_URL) {
        throw new Error("DATABASE_URL is not defined");
    }
    //const sql = neon(db_key||'');
    //const data = await sql('SELECT * FROM orders WHERE id = $1', [id]);
    //const data = await sql`SELECT * FROM orders WHERE id = ${userProfile?.id}`;
    console.log('Fetching your placed order data...');
   // return data as Order[];
}

//Insert data into the orders table that contains a column for total and items. The total is the total price of the items in the cart and the items is an array of the items in the cart. The items array is a JSON object that contains the id, title, price, and quantity of each item in the cart. The total price of the items in the cart is calculated by multiplying the price of each item by the quantity of that item and summing the results. The items array is created by mapping over the items in the cart and creating a new object for each item that contains the id, title, price, and quantity of that item. The items array is then passed to the INSERT INTO query as a parameter. The total price of the items in the cart is also passed to the INSERT INTO query as a parameter. The total price and items array are then inserted into the orders table in the database.
//javascript

// export async function setOrder(total:number, cartItems:any) {
   
    
//     if (!process.env.DATABASE_URL) {
//         throw new Error("DATABASE_URL is not defined");
//     }
    //const sql = neon(db_key||'');
    // const items = cartItems.map((item: any) => {
    //     return {
    //         id: item.id,
    //         title: item.title,
    //         price: item.price,
    //         quantity: item.quantity
    //     }

    // });
    //await sql`INSERT INTO orders (total, items, user_id) VALUES (${total}, ${JSON.stringify(cartItems)}, ${userProfile?.id})`;
    
    //await sql('INSERT INTO orders (total, items, user_id) VALUES ($1, $2 , $3)', [total, JSON.stringify(items), userProfile?.id]);
      
//     console.log('inserting into order data...');
    
// }

export async function getOrders() {
    const sql = neon(db_key||'');
    try {
        const data = await sql`SELECT * FROM orders`;
        console.log('Fetching orders...');
        return data as Order[];
      
    } catch (error) {
        console.error("Error fetching orders:", error);
        throw error;
    }
};
