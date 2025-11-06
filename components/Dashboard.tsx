import React from 'react';
import Link from 'next/link';

export const Dash = () => {
    
    return (
        <div className="p-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
           
            <div className='w-full bg-white p-0 rounded-2xl h-60 hover:shadow-md flex justify-between col-span-1 sm:col-span-2 '>
            <Link href={"/marketplace"} className="w-full flex justify-between ">
                <div className="text-2xl font-semibold p-4" >
                   
                    <span className="text-gray-800">E-</span><span className="text-red-600">Marketplace</span>
                   
                </div>
            <img src="images/e-market.png" alt="Various products" className="w-24 h-24 object-cover" style={{height:'100%', width:'50%',borderRadius:'16px'}}/>
            </Link>
            </div>
            
            <div className="bg-white p-0 hover:shadow-md rounded-2xl flex justify-between col-span-1 sm:col-span-2">
                <Link href="/marketplace/catalog" className='w-full flex justify-between '>
                    <div className="text-2xl font-semibold p-4 ">
                        <span className="text-gray-800"> Sell on</span> <span className="text-red-600">Merxpress</span>
                    </div>
                
                <img src="images/dash1.png" alt="Various products" className="w-24 h-24 object-cover" style={{height:'100%', width:'50%',borderRadius:'16px'}}/>
                </Link>
                {/* <Image loading='lazy' src={'/dash1.png'} alt='Various products' height={100} width={100} className='object-cover w-[50%] h-full rounded-2xl'/> */}
            </div>
            
            <div className="bg-white p-0 rounded-2xl hover:shadow-md flex justify-between row-span-2">
                <Link href="/merxassist" className='w-full flex justify-between '>
                    
                <div className="text-2xl font-semibold p-4">
                  <span className="text-gray-800">Merx</span><span className="text-red-600">Assist</span>
                </div>
                <img src="images/robot.png" alt="Robot assistant" className="w-24 h-24 object-cover self-end" style={{height:'65%', width:'45%',borderRadius:'16px'}} />
                </Link>
                {/* <Image loading='lazy' src={'/robo.png'} alt='Robot Assistant' height={24} width={24} className='object-cover h-[55%] w-[45%] rounded-2xl'/> */}
            </div>
            <div className="bg-white p-0 rounded-2xl hover:shadow-md flex justify-between">
                <Link href="/merxpay" className='w-full flex justify-between '>
                <div className="text-2xl font-semibold p-4">
                   
                    <span className="text-gray-800">Merx</span><span className="text-red-600">Pay</span>
                    
                </div>
                <img src="images/credit.png" alt="Payment cards" className="w-24 h-24 object-cover"  style={{height:'100%', width:'50%',borderRadius:'16px'}}/>
                </Link>
            </div>
            <div className="bg-white estate rounded-2xl hover:shadow-md flex justify-between row-span-2 bg-[url(/images/estates.png)] bg-bottom-right bg-no-repeat">
                <Link href="/merxestates" className='w-full flex justify-between '>
                    <div className="text-2xl p-4 font-semibold">
                        <span className="text-gray-800">Merx</span><span className="text-red-600">Estates</span>
                    </div>
                </Link>
                {/* <img src="images/estates.png" alt="Buildings" className=" object-cover self-end rounded-e-lg" style={{height:'45%', width:'56%'}}/> */}
            </div>
            <div className="bg-white foundation rounded-2xl hover:shadow-md flex justify-between bg-[url(/images/merx-foundation.png)] bg-bottom-right bg-no-repeat">
                <Link href="/merxfoundation" className='w-full flex justify-between '>
                <div className="text-2xl font-semibold p-4  ">
                  <span className="text-gray-800">Merx</span><span className="text-red-600">Foundation</span>
                </div>
                </Link>
                
            </div>
            <div className="bg-white p-0 rounded-2xl hover:shadow-md flex justify-between">
                <Link href="/merxhub" className='w-full flex justify-between '>
                <div className="text-2xl font-semibold p-4">
                   <span className="text-gray-800">Merx</span><span className="text-red-600">E-Hub</span>
                </div>
                <img src="images/globe.png" alt="Globe" className="w-24 h-24 object-cover self-end" style={{height:'90%', width:'40%',borderRadius:'16px'}}/>
                </Link>
            </div>
            <div className="bg-white rounded-2xl hover:shadow-md flex justify-between">
                <Link href="/merxnews" className='w-full flex justify-between '>
                <div className="text-2xl font-semibold p-4">
                <span className="text-gray-800">Merx</span><span className="text-red-600">News</span>
                </div>
                <img src="images/man-holding-newspaper.png" alt="Person reading news" className="w-24 h-24 object-cover rounded-lg self-end" style={{height:'90%', width:'30%'}} />
                </Link>
            </div>
            <div className="bg-white p-4 rounded-2xl hover:shadow-md flex justify-between">
                <Link href="/merxacademy" className='w-full flex justify-between '>
                <div className="text-2xl font-semibold">
                <span className="text-gray-800">Merx</span><span className="text-red-600">Academy</span>
                </div>
                <img src="images/merx-academy.png" alt="Graduation cap and books" className="w-27 h-28 object-cover self-end"/>
                </Link>
            </div>
            <div className="bg-white p-4 rounded-2xl hover:shadow-md flex justify-between">
                <Link href="/merxservices" className='w-full flex justify-between '>
                    <div className="text-2xl font-semibold ">
                       <span className="text-gray-800">E-</span> <span className="text-red-600">Services</span>
                    </div>
                    <img src="images/e-servies.png" alt="Laptop" className="w-24 h-24 object-cover rounded-e-lg self-end" />
                </Link>
            </div>
            <div className="bg-white rounded-2xl hover:shadow-md flex justify-between">
                <Link href="/merxcare" className='w-full flex justify-between '>
                <div className="text-2xl font-semibold p-4">
                <span className="text-gray-800">Merx</span><span className="text-red-600">Care</span>
                </div>
                <img src="images/doctor.png" alt="Smiling person" className="w-24 h-24 object-cover self-end rounded-e-lg"  style={{height:'90%', width:'45%',borderRadius:'16px'}}/>
                </Link>
            </div>
            <div className="bg-white p-4 rounded-2xl hover:shadow-md flex justify-between">
                <Link href="/merxclips" className='w-full flex justify-between '>
                <div className="text-2xl font-semibold">
                <span className="text-gray-800">Merx</span><span className="text-red-600">Clips</span>
                </div>
                <img src="images/clips.png" alt="Television" className="w-24 h-24 object-cover" style={{height:'100%', width:'55%'}}/>
                </Link>
            </div>
        </div>
    );
};