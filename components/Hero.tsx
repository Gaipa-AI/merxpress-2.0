'use client'
import React from 'react'
//import { Button } from './ui/button'
import Link from 'next/link'


export const Page=()=>{
    

    return(
        <div className=" px-4 bg-white" style={{marginTop:"40px"}}>
            <div className="flex flex-col md:flex-row items-center">
                <div className="ml-10 md:w-1/2">
                    <h1 className="text-6xl mr-2.5 font-bold text-gray-700">Welcome to Merxpress Mall</h1>
                    <p className="text-2xl text-gray-700 mt-4 font-semibold">Infinite opportunities for everyone <br></br> and everywhere</p>
                    
                    <Link href="/marketplace"> 
                    
                    <button className="mt-6 px-5 py-2.5 cursor-pointer bg-red-500/80 text-white text-lg rounded-md" >Explore More</button>
`
                    </Link>
                    {/* <Button className='mt-6 text-lg bg-red-500 text-zinc-100 font-semibold rounded-md ' variant="link">Explore More</Button>
                    */}
                </div>
                <div className="md:w-1/2 mt-6 md:mt-0 mr-4">
                    <img src="images/hero.png" alt="Two people working together on a computer" className="rounded-lg shadow-lg" style={{height:"400px",width:"700px"}} />
                </div>
            </div>
            <div className="flex flex-col mt-10 mb-10 md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-4 p-4">
                <div className="relative w-full md:w-1/2">
                        
                    <img src="images/banner-1.png" alt="Earn points with every purchase banner" className="w-full rounded-lg hover:scale-105 transition duration-300" style={{height:'200px',width:'600px'}} />
                        
                </div>
                <div className="relative  w-full md:w-1/2">
                    {/* <img src="banner2.svg" alt="Weekend special discounts on our services banner" className="w-full rounded-lg hover:scale-105" style={{height:'200px',width:'600px'}}/> */}
                    <img src="images/banner-2.png" alt="Weekend special discounts on our services banner" className="w-full rounded-lg hover:scale-105 transition duration-300" style={{height:'200px',width:'600px'}}/>
                        
                </div>
            </div>


        </div>
    )
}