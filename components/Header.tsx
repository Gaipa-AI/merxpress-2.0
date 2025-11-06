'use client'
import { Settings, ShoppingCart, CircleUserRound } from 'lucide-react'
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card"
import { SearchBar } from '@/components/search/Search'

export const Header = ()=>{
    // const { user, remove } = useAuth();
    

    return(
        <nav className="bg-[#011627] p-4 flex justify-between items-center">
            <div className="flex items-center">
                {/* <img src="https://res.cloudinary.com/dbfydxolq/image/upload/v1734592271/merxpressLogo_alez0i.svg" alt="Merxpress Logo" className="h-10" style={{height:"60px",width:"400px"}}/> */}
                <img src="/logos/Merxpress-Logo.png" alt="Merxpress Logo" className="h-13 w-full ml-4" />
                {/* <img src="https://res.cloudinary.com/dbfydxolq/image/upload/v1734592271/merxpressLogo_alez0i.svg" alt="Merxpress Logo" className="h-10" style={{height:"60px",width:"400px"}}/> */}
            </div>
            <div className="flex items-center space-x-5 ">
                <div className="relative w-auto flex-grow max-w-md">
                    
                    {/* <SearchBar className="w-full max-w-md" /> */}
                    <SearchBar placeholder="Search for products, brands and more..." />
                    
                </div>
                
                <div className='flex group hover:text-red-500 hover:stroke-red-500'>
                <div className="relative ">
                    
                    {/* <img src='icons/cart-outline.svg' className='h-10 w-10 fill-white '/> */}
                     <ShoppingCart className='w-full h-8 stroke-white hover:stroke-red-500' strokeWidth={1.0} fill='none' href='/marketplace/cart' />
                    {/* <span className="absolute top-0 right-0 bg-red-500 text-white text-xs rounded-full px-1">{cartCount}</span> */}
                    
                </div>
                <a href="/marketplace/cart" className="text-gray-400 hover:text-red-500">Cart</a>
                </div>
                <div className="">
                    
                    {/* <img src='Windows_Settings_icon.svg' className='h-7 w-7 fill-white '/> */}
                    <span className='flex'>
                    <Settings className='w-full h-8 stroke-white hover:stroke-red-500 mr-1 max-w-md:h-4' strokeWidth={1.0} fill='none' href='null'/> 
                    {/* <span className="absolute top-0 right-0 bg-red-500 hover:fill-red-500 text-white text-xs rounded-full px-1"></span> */}
                    <a href="#" className="text-gray-400 hover:text-red-500 ">Settings</a>
                    </span>
                </div>
                
                <div className="relative group">
                    <HoverCard>
                            <HoverCardTrigger asChild>
                                <CircleUserRound className='w-8 h-8 stroke-white hover:stroke-red-500 shrink-0 self-stretch my-auto aspect-square' strokeWidth={1.0} fill='none' href='null'/>

                            </HoverCardTrigger>
                            <HoverCardContent className="w-80">
                                <div className="flex justify-between gap-4">
                                
                                <div className="space-y-1">
                                    {/* <Avatar>
                                    <AvatarImage src="https://github.com/vercel.png" />
                                    <AvatarFallback>VC</AvatarFallback>
                                    </Avatar> */}
                                    {/* <h4 className="text-sm font-semibold">Hi {user ? user: null}</h4> */}
                                    <ul className="space-y-2 w-full">
                                        <div className='p-2 w-70'>
                                        <li className='hover:bg-gray-100 rounded-md p-2'><a href="#" className="hover:text-red-500">Profile</a></li>
                                        <li className='hover:bg-gray-100 rounded-md p-2'><a href="#" className="hover:text-red-500">Orders</a></li>
                                        <li className='hover:bg-gray-100 rounded-md p-2'><a href="#" className="hover:text-red-500">Wishlist</a></li>
                                        <li className='hover:bg-gray-100 rounded-md p-2'><a href="#" className="hover:text-red-500">Settings</a></li>
                                       {/* {user ? (
                                                
                                                <li>
                                                <Link
                                                    href="/"
                                                    className="hover:text-red-500"
                                                    onClick={remove}
                                                >
                                                    <LogOut className="w-4 h-4 stroke-blue inline-block hover:stroke-red-500" strokeWidth={1.0} fill="none" />
                                                    Logout
                                                </Link>
                                                </li>
                                            ) : (
                                                <li>
                                                <Link
                                                    href="/login"
                                                    className="hover:text-red-500"
                                                    //onClick={logout}
                                                >
                                                    <LogIn className="w-4 h-4 stroke-blue inline-block hover:stroke-red-500" strokeWidth={1.0} fill="none" />
                                                    Login
                                                </Link>
                                                </li>
                                            )} */}
                                            </div>
                                    </ul>
                                    <div className="text-muted-foreground text-xs">
                                    Joined December 2021
                                    </div>
                                </div>
                                </div>
                            </HoverCardContent>
                    </HoverCard>
                    
                </div>
                <a href="#" className="text-gray-400 hover:text-red-500">Account</a>
                {/* <div className="flex items-center gap-x-1 hover:text-[#EB4545] text-[#ECECEC] cursor-pointer">
                    
                    <CircleUserRound className='w-8 h-8 stroke-white shrink-0 self-stretch my-auto aspect-square' strokeWidth={1.0} fill='none' href='null'/>
                    <span className="text-xs md:text-[16px]">Account</span>
                </div> */}
            </div>
        </nav>
    )
}
