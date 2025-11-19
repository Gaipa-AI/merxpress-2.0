import { SearchItems } from '@/components/ItemDisplay1';
import { Suspense } from 'react';
import { CardsSkeleton } from '@/app/ui/skeletons';
import { CartProvider } from '@/components/cart/CartContext';
import {CartPage} from '@/components/cart/Cart';
import { MerxLayout } from '@/components/merxDash';
//import UserProfile from '@/components/UserProfile';
import Products from '@/components/Shelf';
import { Header } from '@/components/Header';
 
export default async function Page(props: {
  searchParams?: Promise<{
    query?: string;
    page?: string;
  }>;
}) {
  const searchParams = await props.searchParams;
  const query = searchParams?.query || '';
  const currentPage = Number(searchParams?.page) || 1;

  

  

 
  return (
    <CartProvider>
    {/* <Header /> */}
    <div className="w-full app-container mx-auto">
    
      
        <MerxLayout>
        <Products query={query} currentPage={currentPage} />
        <CartPage />
        </MerxLayout>
     
     
      
    </div> 
    </CartProvider>
  );
}