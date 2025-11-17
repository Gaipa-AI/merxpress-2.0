"use server";
import { neon } from "@neondatabase/serverless";
import { Product, ImageData } from '@/db/definitions';
import { Order } from './definitions';
import ClientStorage from '@/lib/clientStorage';
import { signIn } from '@/auth';
import { AuthError } from 'next-auth';
import postgres from "postgres";


const db_key =process.env.DATABASE_URL;
const ITEMS_PER_PAGE = 6;
//const sql = neon(db_key||'')
export const sql = postgres(db_key || '', {
  ssl: { rejectUnauthorized: false },
});


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

export async function fetchProducts()
  {
   
  try{
    const response = await fetch(`${process.env.BACKEND_URL}/api/products`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (!response.ok) {
      throw new Error("Failed to fetch products");
    }
    const data = await response.json();
    return data;
  }catch(error){
    console.error('Database Error:', error);
    throw new Error('Failed to fetch products.');
  }

}

export async function getProducts(){
  try{
    const products = await sql<Product[]>`
      SELECT * FROM products
      ORDER BY id ASC
    `;
    return products;
  }catch(error){
    console.error('Database Error:', error);
    throw new Error('Failed to fetch products.');
  
}
}



export async function fetchFilteredItems(
  query: string,
  currentPage: number,
) {
  const offset = (currentPage - 1) * ITEMS_PER_PAGE;

  try {
    const products = await sql<Product[]>`
      SELECT * 
      FROM products
      WHERE
        products.title ILIKE ${`%${query}%`} OR
        products.description ILIKE ${`%${query}%`} OR
        products.price::text ILIKE ${`%${query}%`} 
        
      ORDER BY products.id ASC
      LIMIT ${ITEMS_PER_PAGE} OFFSET ${offset}
    `;

    return products;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch products.');
  }
}

export async function fetchImages() {
    try{
    const images = await sql<ImageData[]>`
      SELECT *
      FROM "Images"
    `;
    return images;
    }
    catch(error){
      console.error('Database Error:', error);
      throw new Error('Failed to fetch images.');
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
