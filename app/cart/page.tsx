import { CartProvider } from '@/components/cart/CartContext';
import {CartPage} from '@/components/cart/Cart';
import { MerxLayout } from '@/components/merxDash';
//import UserProfile from '@/components/UserProfile';
import Products from '@/components/Shelf';
//import { Header } from '@/components/Header';
import { auth } from '@/auth';
import { redirect } from 'next/navigation';
 
export default async function Page(props: {
  searchParams?: Promise<{
    query?: string;
    page?: string;
  }>;
}) {
  const searchParams = await props.searchParams;
  const query = searchParams?.query || '';
  const currentPage = Number(searchParams?.page) || 1;
  const session = await auth();
  if (!session?.user) {
    <div>Login to view your cart</div>
    redirect('/login?callbackUrl=/cart');
  }

  // Now you have user data
  const userId = session.user.id;
  const userEmail = session.user.email;
  const userName = session.user.name || 'Valued Customer';
  

  

 
  return (
    <CartProvider>
    {/* <Header /> */}
    <div className="w-full app-container mx-auto">
    
      
        <MerxLayout>
        <Products query={query} currentPage={currentPage} />
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Welcome back, {userName}! 👋
          </h1>
          <h2>Shopping Cart</h2>
          <p className="text-gray-600">Viewing cart for: {userEmail}</p>
        </div>
        
        <p></p>
        <CartPage />
        </MerxLayout>
     
     
      
    </div> 
    </CartProvider>
  );
}