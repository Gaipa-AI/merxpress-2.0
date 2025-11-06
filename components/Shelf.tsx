//'use client'

//import { useEffect, useState } from "react";
import { ItemCard } from "@/components/ItemCard";
import { Product } from "@/db/definitions";
import { ProductData } from "@/db/definitions";
//import axios from "axios";

const products = await fetch("https://merx-backend-main-a1cmw8.laravel.cloud/api/products")
    .then((res) => res.json())
    .then((data) => data)
    .catch((err) => {
      console.error("Error fetching products:", err);
      return [];
    });

async function fetchFilteredProducts(query: string, currentPage: number): Promise<ProductData[]> {
    // Simulate fetching data from an API or database

    // In a real application, you would replace this with an actual data fetching logic
    const ITEMS_PER_PAGE = 8;
    const filteredProducts = products.filter((product:ProductData) =>
      product.title.toLowerCase().includes(query.toLowerCase())
    );
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    const endIndex = startIndex + ITEMS_PER_PAGE;
    return filteredProducts.slice(startIndex, endIndex);
  }

export async function Products({
   query,
   currentPage,
}:{
    query: string;
    currentPage: number;
}) {
  
  const products= await fetchFilteredProducts(query, currentPage);

  return (
    <div className="flex flex-col mt-4 w-full">
      <h2 className="text-2xl font-bold mb-6 text-slate-800 max-md:max-w-full ">Products from laravel backend</h2>
      <div className="flex w-1/4 flex-col mt-2 ">
        <div className="flex flex-row mb-4">
        {products.slice(0, 4).map((product:Product) => (
          
          <ItemCard key={product.id} product={product}  />
        ))}
        </div>
      </div>
      <div className="flex w-1/4 flex-col mt-2">
        <div className="flex flex-row mb-4">
        {products.slice(4).map((product:Product) => (

          <ItemCard key={product.id} product={product}  />
        ))}
        </div>
      </div>
     
    </div>
  );
};

export default Products;