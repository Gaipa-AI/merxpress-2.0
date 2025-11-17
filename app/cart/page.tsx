import { SearchItems } from '@/components/ItemDisplay1';
import { Suspense } from 'react';
import { CardsSkeleton } from '@/app/ui/skeletons';
import { CartProvider } from '@/components/cart/CartContext';
import {CartPage} from '@/components/cart/Cart';
import { MerxLayout } from '@/components/merxDash';
//import UserProfile from '@/components/UserProfile';
import Products from '@/components/Shelf';
 
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
    <div className="w-full">
      <div className="flex w-full items-center justify-between">
        <h1 className={`text-2xl`}>Marketplace</h1>
      </div>
      <div className="mt-4 flex items-center justify-between gap-2 md:mt-8">
        {/* <SearchBar placeholder="Search invoices..." /> */}
        {/* <UserProfile /> */}
      </div>
      <CartProvider>
      <div className="mt-5 flex w-full justify-center">
        {/* <Pagination totalPages={totalPages} /> */}
        <Suspense fallback={<CardsSkeleton />}>
        <SearchItems query={query} currentPage={currentPage} />
        </Suspense>

      </div>
      
      <div className="app">
        <MerxLayout>
        <Products query={query} currentPage={currentPage} />
        <CartPage />
        </MerxLayout>
      </div>
      </CartProvider>
      
    </div>
  );
}