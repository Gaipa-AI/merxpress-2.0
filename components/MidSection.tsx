import Image from 'next/image';

export const Mid = () => {
    return (
        <div className=" w-full bg-white flex justify-center items-center min-h-screen bg-gray-100">
            <div className="bg-indigo-200 rounded-lg p-8 flex flex-col md:flex-row items-center md:items-start space-y-6 md:space-y-0 md:space-x-6 max-w-6xl">
                <div className="flex-1">
                    <h2 className="text-2xl font-bold text-gray-800 mb-4">Why Choose Merxpress?</h2>
                    <div className="flex flex-col md:flex-row space-y-6 md:space-y-0 md:space-x-6">
                        <div className="flex items-start space-x-3">
                            <Image src={'/icons/timer-outline.svg'} alt='Timer' height={20} width={20}/>
                           
                            <div>
                                <span>
                                    <h3 className="text-lg font-semibold text-gray-800">Fast Delivery</h3>
                                        
                                </span>
                                <p className="text-gray-600">We make sure that all your deliveries arrive to you in the shortest time possible</p>
                            </div>
                        </div>
                        <div className="flex items-start space-x-3">
                           
                            <Image src={'/icons/headset-outline.svg'} alt='Headset' height={20} width={20} className=''/>
                            <div>
                                <h3 className="text-lg font-semibold text-gray-800">24/7 Tech Support</h3>
                                <p className="text-gray-600">We are always ready to help our customers whenever they need assistance using our website</p>
                            </div>
                        </div>
                        <div className="flex items-start space-x-3 ">
                        <Image src={'/icons/cash-outline.svg'} alt='Cash' height={20} width={20}/>
                            <div>
                                <h3 className="text-lg font-semibold text-gray-800">Moneyback Guarantee</h3>
                                <p className="text-gray-600">If your delivered product does not match the description, you can return the product and get your money back</p>
                            </div>
                        </div>
                        <div className='flex flex-col items-start space-x-3 md:flex-row invisible'>
                            <div>
                                <h3 className="text-lg font-semibold text-gray-800">Moneyback Guarantee</h3>
                                <p className="text-gray-600">If your delivered product does not match the description, you can return the product and get your money back</p>
                            </div>

                        </div>
                    </div>
                  
                </div>
                
                <div className="flex-shrink-0 ">
                    <img src="https://res.cloudinary.com/dbfydxolq/image/upload/v1734591564/unsplash_laptopguy_x0jcko.png" alt="Person holding a laptop and smiling" className="absolute right-0 translate-y-[-40%] " style={{height:'340px', width:'480px'}}/>
                    
                </div>
            </div>
        </div>
    );
};