
export const PayHero = () => {
    return (
        <div className="relative h-screen" style={{height: "400px"}}>
                    <img src="images/merx-pay.png" alt="Cryptocurrency and blockchain technology background with Bitcoin coins and dollar bills" className="w-full h-full object-cover" />
                    <div className="w-2/3 absolute inset-0 bg-opacity-50 flex flex-col justify-center items-start p-10" style={{marginLeft: "3%"}}>
                        <h1 className="text-white text-4xl md:text-5xl lg:text-5xl font-mono font-bold mb-4">MerxPay: Seamless Payments, Global Reach</h1>
                        <button className="mt-10 bg-red-500 text-white px-6 py-3 rounded-lg text-lg ">Explore More</button>
                    </div>
        </div>
    );

}

