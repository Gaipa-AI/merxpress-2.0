'use client'
import React from "react";
import { ChevronRight } from "lucide-react";
import { useRouter } from "next/navigation";

export const NavList=()=>{
    const router = useRouter();
    return(
        <nav className="bg-white flex flex-wrap gap-2 mb-8 justify-left items-center text-sm my-auto self-stretch font-bold text-slate-800 mr-2">
            <button className="mt-2 mb-2 pr-6 pl-6 py-3 bg-red-500 text-white ml-2 rounded-lg mr-5" onClick={()=>router.push('/marketplace/catalog')}>Catalog</button>
            {/* <div className="mt-6 pr-6 pl-6 pr-6 py-3 bg-red-500 text-white ml-2 rounded-lg" role="button" aria-label="Catalog">Catalog</div> */}
            <ul className="">
                <div className="dropdown ">
                <li className="px-2 self-start hover:text-red-500"><a href="/marketplace/catalog">Sell on Merxpress</a></li>
                    <div className="dropdown-content">
                        <li className=""><a href="#" className="">African Products <ChevronRight className="h-6 w-6 inline-block ml-28 " href="null" strokeWidth={1.5} fill="none"/></a>
                        {/* <div className="dropdown-content">
                            <li><a href="#">Traditional fabrics</a></li>
                            <li><a href="#">Handcrafted Accessories</a></li>
                            <li><a href="#">Art Pieces</a></li>
                            <li><a href="#">African Spices</a></li>
                        </div> */}
                        </li>
                        <li className=""><a href="#">Kitchen Utensils <ChevronRight className="h-6 w-6 inline-block ml-28" href="null" strokeWidth={1.5} fill="none"/></a></li>
                        <li><a href="#">Home Furniture </a></li>
                        <li><a href="#">Electronics </a></li>
                        <li><a href="#">Kids Section</a></li>
                        <li><a href="#">Entertainment Equipment</a></li>
                        <li><a href="#">School Equipment</a></li>
                        <li><a href="#">Beauty and Personal Care</a></li>
                        <li><a href="#">Technology</a></li>
                        <li><a href="#">Sports & Fitness</a></li>
                        <li><a href="#">Agriculture products</a></li>
                        <li><a href="#">Automobiles & Auto Spares</a></li>
                        <li><a href="#">Building Equipment</a></li>
                        <li><a href="#">Clothes Fashion & Footwear</a></li>

            
                    

                    </div>
                </div>
                <div className="dropdown ">
                <li className="px-2 hover:text-red-500"><a href="#">MerxAssist</a></li>
                    <div className="dropdown-content">
                        <li><a href="#">Payment</a></li>
                        <li><a href="#">Tutorial</a></li>
                        <li><a href="#">AI Assistant</a></li>
                    

                    </div>
                </div>
                <div className="dropdown ">
                <li className="px-2 hover:text-red-500"><a href="/merxpay">MerxPay</a></li>
                    <div className="dropdown-content">
                        <li><a href="#">PayPal</a></li>
                        <li><a href="#">Mpesa</a></li>
                        <li><a href="#">MTN</a></li>
                        <li><a href="#">Stripe</a></li>
                        <li><a href="#">Bank</a></li>
                    

                    </div>
                </div>
                <div className="dropdown ">
                <li className="px-2 hover:text-red-500"><a href="#">MerxEstates</a></li>
                    <div className="dropdown-content">
                        <li><a href="#">Visit</a></li>
                        <li><a href="#">Us</a></li>
                        <li><a href="#">Here</a></li>
                    

                    </div>
                </div>
                <div className="dropdown ">
                <li className="px-2 hover:text-red-500"><a href="#">MerxAssist</a></li>
                    <div className="dropdown-content">
                        <li><a href="#">Visit</a></li>
                        <li><a href="#">Us</a></li>
                        <li><a href="#">Here</a></li>
                    

                    </div>
                </div>
                <div className="dropdown ">
                <li className="px-2 hover:text-red-500"><a href="#">MerxFoundation</a></li>
                    <div className="dropdown-content">
                        <li><a href="#">Visit</a></li>
                        <li><a href="#">Us</a></li>
                        <li><a href="#">Here</a></li>
                    

                    </div>
                </div>
                <div className="dropdown ">
                <li className="px-2 hover:text-red-500"><a href="#">MerxAcademy</a></li>
                    <div className="dropdown-content">
                        <li><a href="#">How to Sell products</a></li>
                        <li><a href="#">Us</a></li>
                        <li><a href="#">Here</a></li>
                    

                    </div>
                </div>
                <div className="dropdown ">
                <li className="px-2 hover:text-red-500"><a href="#">Merx E-hub</a></li>
                    <div className="dropdown-content">
                        <li><a href="#">Visit</a></li>
                        <li><a href="#">Us</a></li>
                        <li><a href="#">Here</a></li>
                    

                    </div>
                </div>
                <div className="dropdown ">
                <li className="px-2 hover:text-red-500"><a href="#">MerxCare</a></li>
                    <div className="dropdown-content">
                        <li><a href="#">Visit</a></li>
                        <li><a href="#">Us</a></li>
                        <li><a href="#">Here</a></li>
                    

                    </div>
                </div>
                <div className="dropdown ">
                <li className="px-2 hover:text-red-500"><a href="#">MerxClips</a></li>
                    <div className="dropdown-content">
                        <li><a href="#">Visit</a></li>
                        <li><a href="#">Us</a></li>
                        <li><a href="#">Here</a></li>
                    

                    </div>
                </div>
                <div className="dropdown ">
                <li className="px-2 hover:text-red-500"><a href="#">E-services</a></li>
                    <div className="dropdown-content">
                        <li><a href="#">Visit</a></li>
                        <li><a href="#">Us</a></li>
                        <li><a href="#">Here</a></li>
                    

                    </div>
                </div>
                <div className="dropdown ">
                <li className="px-2 hover:text-red-500"><a href="#">MerxNews</a></li>
                    <div className="dropdown-content">
                        <li><a href="#">Visit</a></li>
                        <li><a href="#">Us</a></li>
                        <li><a href="#">Here</a></li>
                    

                    </div>
                </div>
                
            </ul>
        </nav>
    )

}