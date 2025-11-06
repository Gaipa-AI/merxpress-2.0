import { ProductGallery } from "@/components/gallery/ProductGallery";
import { MerxLayout } from "@/components/merxDash";
import { Items } from "@/components/Items";
import { ItemDisplay } from "@/components/Display";
import { NavList } from "@/components/NavList";
import Products  from "@/components/Shelf";
import ChatWidget from "@/components/chat/ChatWidget";
import SideNav from "@/components/SideNav";
//import { NavigationMenuDemo } from "@/components/NavMenu";


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
                 <Products query={query} currentPage={currentPage} />           
                <Items/>
                <ItemDisplay/>
                <SideNav/>
                {/* <CartPage/> */}
                <ChatWidget/>
            </MerxLayout>
           
        </div>
    )

}