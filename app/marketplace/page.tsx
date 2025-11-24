import { ProductGallery } from "@/components/gallery/ProductGallery";
import { MerxLayout } from "@/components/merxDash";
import { Items } from "@/components/Items";
import { ItemDisplay } from "@/components/Display";
import { NavList } from "@/components/NavList";
import Products  from "@/components/Shelf";
import ChatWidget from "@/components/chat/ChatWidget";
//import SideNav from "@/components/SideNav";
import { Suspense } from "react";
import { CardsSkeleton } from "../ui/skeletons";
import SideNav from "@/components/SideNav";
//import { NavigationMenuDemo } from "@/components/NavMenu";
import DashboardPage from "@/components/DASHBOARD_EXAMPLE";
//import {CartPage} from "@/components/cart/Cart";
//import { CartProvider } from "@/components/cart/CartContext";


export default async function Market(props: {
  searchParams?: Promise<{
    query?: string;
    page?: string;
  }>;
}){
    const searchParams = await props.searchParams;
    const query = searchParams?.query || '';
    const currentPage = Number(searchParams?.page) || 1;
    return(
        <div> 
           
            <NavList/>
            {/* <NavigationMenuDemo/> */}
            <ProductGallery/>
            {/* <FloatingChat/> */}
            <MerxLayout>   
                         
                <Items/>
                <ItemDisplay/>
                <Suspense fallback={<CardsSkeleton />}>
                <Products query={query} currentPage={currentPage} /> 
                </Suspense> 
                <SideNav/>
                <DashboardPage/>
                {/* <div className="hidden">
                 <CartPage/> 
                </div> */}
                <ChatWidget/>
            </MerxLayout>
           
           
        </div>
    )

}