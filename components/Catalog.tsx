//'use client'
//import { useState } from "react";
import { LayoutList, LayoutGrid } from "lucide-react";
import { fetchFilteredItems } from "@/db/actions";
import { ItemCard } from "@/components/ItemCard";
import { Product, ProductCardProps } from "@/db/definitions";
import { fetchProducts } from "@/db/actions";
import { ProductData } from "@/db/definitions";

// const products = await fetch("https://merx-backend-main-a1cmw8.laravel.cloud/api/products")
//     .then((res) => res.json())
//     .then((data) => data)
//     .catch((err) => {
//       console.error("Error fetching products:", err);
//       return [];
//     });

//     async function fetchFilteredItems(query: string, currentPage: number): Promise<ProductData[]> {
        
//         const ITEMS_PER_PAGE = 8;
//         const filteredProducts = products.filter((product:ProductData) =>
//           product.title.toLowerCase().includes(query.toLowerCase())
//         );
//         const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
//         const endIndex = startIndex + ITEMS_PER_PAGE;
//         return filteredProducts.slice(startIndex, endIndex);
//       }
//const products= await fetchProducts();
// async function fetchFilteredProducts(query: string, currentPage: number): Promise<ProductData[]> {
//     // Simulate fetching data from an API or database

//     // In a real application, you would replace this with an actual data fetching logic
//     const ITEMS_PER_PAGE = 8;
//     const filteredProducts = products.filter((product:ProductData) =>
//       product.title.toLowerCase().includes(query.toLowerCase())
//     );
//     const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
//     const endIndex = startIndex + ITEMS_PER_PAGE;
//     return filteredProducts.slice(startIndex, endIndex);
//   }

export async function Catalog ({
   query,
   currentPage,
}:{
    query: string;
    currentPage: number;
}) {
    const products = await fetchFilteredItems(query,currentPage)
    
    //console.log('Catalog products:', products);
    // const price:number=0;
    // const [value, setValue] = useState(price || 1000);
   
    // function onSliderChange(e: React.ChangeEvent<HTMLInputElement>) {
    //     const newValue = Number(e.target.value)
    //     setValue(newValue)
    // }
    return (
        <div className="w-full p-2 ">
            <nav className="text-md text-gray-500 font-semibold mb-4 px-0 mr-0">
                <a href="#" className="hover:underline  mr-4">Home</a> /     
                <a href="#" className="hover:underline ml-2 mr-4">Catalog</a> / 
                <a href="#" className="hover:underline ml-4 mr-4">Kitchen Utensils</a> /
            </nav>
            <h1 className="text-4xl font-bold mb-4">Cutting Tools and Accessories (136)</h1>
            <div className="flex flex-wrap">
                <aside className="w-full md:w-1/4 p-4 bg-white text-slate-800 rounded-lg shadow-md mb-4 md:mb-0">
                    <div className="mb-4">
                        <h2 className="font-bold mb-2">Price</h2>
                        <div className="flex justify-between items-center mb-2">
                            <input type="text" className="border rounded p-1 w-1/2 mr-2" defaultValue={0} />
                            <input type="text" className="border rounded p-1 w-1/2 "
                             //value={`$${value}`}
                             //defaultValue={0}
                             
                             />
                        </div>
                        <input type="range" className="w-full accent-red-500"
                         min={0}
                         max={1000}
                         //value={value}
                         //onChange={onSliderChange}
                         />
                        <button className="text-red-500 mt-2">Clear</button>
                    </div>
                    <div className="mb-4">
                        <h2 className="font-bold mb-2">Delivery Time</h2>
                        <div className="flex flex-col">
                            <label className="flex items-center mb-2">
                                <input type="radio" name="delivery" className="mr-2"  /> Any
                            </label>
                            <label className="flex items-center mb-2">
                                <input type="radio" name="delivery" className="mr-2" defaultChecked /> Today
                            </label>
                            <label className="flex items-center mb-2">
                                <input type="radio" name="delivery" className="mr-2"  /> Tomorrow
                            </label>
                            <label className="flex items-center mb-2">
                                <input type="radio" name="delivery" className="mr-2" /> Up to 3 days
                            </label>
                            <label className="flex items-center mb-2">
                                <input type="radio" name="delivery" className="mr-2"  /> Up to 7 days
                            </label>
                        </div>
                        <button className="text-red-500 mt-2">Clear</button>
                    </div>
                    <div className="mb-4">
                        <h2 className="font-bold mb-2">Brand</h2>
                        <input type="text" className="border rounded p-1 w-full mb-2 " placeholder="Start typing" />
                        <div className="flex flex-col">
                            <label className="flex items-center mb-2">
                                <input type="checkbox" className="mr-2" /> Wüsthof
                            </label>
                            <label className="flex items-center mb-2">
                                <input type="checkbox" className="mr-2" /> Shun
                            </label>
                            <label className="flex items-center mb-2">
                                <input type="checkbox" className="mr-2" /> Victorinox
                            </label>
                            <label className="flex items-center mb-2">
                                <input type="checkbox" className="mr-2" /> ZWilling
                            </label>
                            <label className="flex items-center mb-2">
                                <input type="checkbox" className="mr-2" /> 0XO
                            </label>
                            
                        </div>
                    </div>
                    <div className="mb-4">
                        <h2 className="font-bold mb-2">Type</h2>
                        <input type="text" className="border rounded p-1 w-full mb-2" placeholder="Start typing" />
                        <div className="flex flex-col">
                            <label className="flex items-center mb-2">
                                <input type="checkbox" className="mr-2" /> Chef&apos;s Knives
                            </label>
                            <label className="flex items-center mb-2">
                                <input type="checkbox" className="mr-2" /> Knife Sharpner
                            </label>
                            <label className="flex items-center mb-2">
                                <input type="checkbox" className="mr-2" /> Knife shears
                            </label>
                            <label className="flex items-center mb-2">
                                <input type="checkbox" className="mr-2" /> Peelers
                            </label>
                            <label className="flex items-center mb-2">
                                <input type="checkbox" className="mr-2" /> Graters and Zesters
                            </label>
                            
                        </div>
                        <button className="text-red-500 mt-2">Clear</button>
                    </div>
                    <button className="rounded-md font-semibold bg-white justify-center items-center text-red-400 border 2 border-red-400 px-4 w-full h-10 hover:bg-red-400 hover:text-white">Apply</button>
                   
                
                </aside>
                
                
                <main className="w-full md:w-3/4 p-4">
                    <div className="flex justify-between items-center mb-4">
                        <select className="border rounded p-2">
                            <option>Lowest Price</option>
                            <option>Highest Price</option>
                            <option>Best Sellers</option>
                        </select>
                        <div className="flex items-center">
                            <select className="border rounded p-2 mr-2">
                                <option>16 per Page</option>
                                <option>8 Per Page</option>
                                <option>32 Per Page</option>
                                <option>64 Per Page</option>
                            </select>
                            <div className="flex">
                                <button className="border rounded p-2 mr-2">
                                    {/* <i className="fas fa-th"></i> */}
                                    <LayoutGrid size={24} className="hover:text-red-500" />
                                </button>
                                <button className="border rounded p-2">
                                    {/* <i className="fas fa-list"></i> */}
                                    <LayoutList size={24} className="hover:text-red-500" />
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="flex w-1/4 flex-col mt-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                        <div className="flex flex-row mb-4">
                                {products.slice(0, 3).map((product:Product) => (
                                  
                                  <ItemCard key={product.id} product={product}  />
                                ))}
                        </div>
                        <div className="flex flex-row mb-4">
                            {products.slice(4,8).map((product:Product) => (
                            
                            <ItemCard key={product.id} product={product}  />
                            ))}
                        </div>
                    </div>
                </main>
                <aside className="w-full md:w-1/4 mb-4 md:mb-0">
                    <div className=" ">
                    <img loading="lazy"
                        src={'https://cdn.builder.io/api/v1/image/assets/TEMP/7aed7a89983aedb0cce43eb1618b9e28780a0caded8fa0641c1cf25cb69fcd23?apiKey=2c0ef7d7caa24d8d8c04d3962010fc58&'}
                        alt={'knife banner'}
                        className="object-contain mt-10 w-full rounded-2xl aspect-[0.56]"
                    />

                    </div>

                </aside>
            </div>
        </div>
    );
};