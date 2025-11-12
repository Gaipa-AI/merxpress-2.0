# Integration Examples

Real-world examples of how to use sessions in your Merxpress application.

## Example 1: Protected Cart Page (Server Component)

```tsx
// app/cart/page.tsx
import { auth } from '@/auth';
import { redirect } from 'next/navigation';

export default async function CartPage() {
  // Get session - redirects to login if not authenticated
  const session = await auth();
  if (!session?.user) {
    redirect('/login?callbackUrl=/cart');
  }

  // Now you have user data
  const userId = session.user.id;
  const userEmail = session.user.email;

  return (
    <div>
      <h1>Shopping Cart</h1>
      <p>Viewing cart for: {userEmail}</p>
      {/* Fetch user's cart items using userId */}
    </div>
  );
}
```

## Example 2: User Profile Page (Server Component)

```tsx
// app/dashboard/page.tsx
import { auth } from '@/auth';
import { notFound } from 'next/navigation';

export default async function ProfilePage() {
  const session = await auth();
  if (!session?.user) notFound();

  return (
    <div className="max-w-2xl mx-auto p-6">
      <h1>My Profile</h1>
      
      <div className="bg-blue-50 p-4 rounded mb-6">
        <h2 className="font-bold">Account Information</h2>
        <p><strong>Name:</strong> {session.user.name}</p>
        <p><strong>Email:</strong> {session.user.email}</p>
        <p><strong>ID:</strong> {session.user.id}</p>
      </div>
    </div>
  );
}
```

## Example 3: Client-Side User Menu (Client Component)

```tsx
'use client';

import { useSession } from '@/hooks/useSession';
import { signOut } from 'next-auth/react';
import { Menu, LogOut, Settings, User as UserIcon, Loader } from 'lucide-react';
import { useState } from 'react';

export function UserMenu() {
  const { session, loading } = useSession();
  const [isOpen, setIsOpen] = useState(false);

  if (loading) {
    return <Loader className="w-5 h-5 animate-spin" />;
  }

  if (!session?.user) {
    return null;
  }

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 p-2 hover:bg-gray-100 rounded"
      >
        <span className="text-sm font-medium">{session.user.name}</span>
        <Menu className="w-5 h-5" />
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg z-50">
          <div className="p-4 border-b">
            <p className="font-semibold">{session.user.name}</p>
            <p className="text-sm text-gray-600">{session.user.email}</p>
          </div>

          <nav className="py-2">
            <a href="/dashboard" className="flex items-center gap-2 px-4 py-2 hover:bg-gray-50">
              <UserIcon className="w-4 h-4" />
              Profile
            </a>
            <a href="/settings" className="flex items-center gap-2 px-4 py-2 hover:bg-gray-50">
              <Settings className="w-4 h-4" />
              Settings
            </a>
          </nav>

          <div className="border-t p-2">
            <button
              onClick={() => signOut({ callbackUrl: '/login' })}
              className="w-full flex items-center gap-2 px-4 py-2 text-red-600 hover:bg-red-50 rounded"
            >
              <LogOut className="w-4 h-4" />
              Sign Out
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
```

## Example 4: Conditional Content Based on Auth (Client)

```tsx
'use client';

import { useIsAuthenticated } from '@/hooks/useSession';

export function AuthenticatedContent() {
  const { isAuthenticated, loading } = useIsAuthenticated();

  if (loading) return <div>Loading...</div>;

  return (
    <>
      {isAuthenticated ? (
        <div className="bg-green-50 p-4 rounded">
          <h2>Premium Features Unlocked</h2>
          <p>You have access to all premium features</p>
        </div>
      ) : (
        <div className="bg-blue-50 p-4 rounded">
          <h2>Unlock Premium</h2>
          <p><a href="/login" className="underline">Log in</a> to access premium features</p>
        </div>
      )}
    </>
  );
}
```

## Example 5: Server Action with User ID

```tsx
// app/actions.ts
'use server';

import { auth } from '@/auth';
import postgres from 'postgres';

const sql = postgres(process.env.DATABASE_URL!);

export async function createOrder(items: any[]) {
  // Get current user
  const session = await auth();
  if (!session?.user) {
    throw new Error('Not authenticated');
  }

  const userId = session.user.id;
  const userEmail = session.user.email;

  // Use userId to create order associated with this user
  const order = await sql`
    INSERT INTO orders (user_id, email, items, created_at)
    VALUES (${userId}, ${userEmail}, ${JSON.stringify(items)}, NOW())
    RETURNING *
  `;

  return order[0];
}
```

## Example 6: API Route with User Authentication

```tsx
// app/api/user/preferences/route.ts

import { auth } from '@/auth';
import { NextResponse } from 'next/server';

export async function GET() {
  const session = await auth();
  
  if (!session?.user) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  // Use user ID to fetch their preferences
  const userId = session.user.id;
  
  // Query database for user preferences...
  const preferences = {
    theme: 'dark',
    notifications: true,
  };

  return NextResponse.json(preferences);
}

export async function POST(request: Request) {
  const session = await auth();
  
  if (!session?.user) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const data = await request.json();
  const userId = session.user.id;

  // Update user preferences in database...

  return NextResponse.json({ success: true });
}
```

## Example 7: Data Fetching with User Context (Server)

```tsx
import { auth } from '@/auth';

export default async function DashboardPage() {
  const session = await auth();
  if (!session?.user) return null;

  const userId = session.user.id;

  // Fetch user-specific data
  const [orders, profile] = await Promise.all([
    fetchUserOrders(userId),
    fetchUserProfile(userId),
  ]);

  return (
    <div>
      <h1>Dashboard for {profile.name}</h1>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <h2>Recent Orders</h2>
          {orders.map((order) => (
            <OrderCard key={order.id} order={order} />
          ))}
        </div>
      </div>
    </div>
  );
}

async function fetchUserOrders(userId: string) {
  // Use userId to fetch orders from database
  return [];
}

async function fetchUserProfile(userId: string) {
  // Use userId to fetch profile
  return { name: 'User' };
}
```

## Example 8: Error Handling with Sessions

```tsx
'use client';

import { useSession } from '@/hooks/useSession';

export function SessionContent() {
  const { session, loading, error } = useSession();

  if (loading) {
    return <div>Loading user data...</div>;
  }

  if (error) {
    return (
      <div className="bg-red-50 p-4 rounded">
        <p className="text-red-700">Failed to load user data</p>
        <p className="text-sm text-red-600">{error.message}</p>
        <button
          onClick={() => window.location.reload()}
          className="mt-2 px-4 py-2 bg-red-600 text-white rounded"
        >
          Retry
        </button>
      </div>
    );
  }

  if (!session?.user) {
    return <div>Please log in</div>;
  }

  return <div>Welcome, {session.user.name}!</div>;
}
```

## Example 9: Using UserProfile Component

```tsx
// components/Header.tsx
import NavLinks from '@/app/ui/nav-links';
import UserProfile from '@/components/UserProfile';

export function MainHeader() {
  return (
    <header className="bg-white shadow">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center gap-4">
          <a href="/" className="font-bold text-xl">Merxpress</a>
          {/* Server component - shows nav links with session data */}
          <NavLinks />
        </div>
        
        {/* Pre-built user profile component */}
        <UserProfile />
      </div>
    </header>
  );
}
```

## Example 10: Marketplace Page with Session

```tsx
// app/marketplace/page.tsx
import { auth } from '@/auth';
import ProductGallery from '@/components/gallery/ProductGallery';

export default async function MarketplacePage() {
  const session = await auth();

  return (
    <div>
      <div className="mb-6 flex justify-between items-center">
        <h1 className="text-3xl font-bold">Marketplace</h1>
        {session?.user && (
          <div className="text-sm text-gray-600">
            Logged in as: <span className="font-semibold">{session.user.name}</span>
          </div>
        )}
      </div>

      <ProductGallery userId={session?.user?.id} />
    </div>
  );
}
```

---

## Summary

These examples show how to:

✅ **Server Components**: Use `await auth()` to get user data and protect routes  
✅ **Client Components**: Use `useSession()` hook to get user data  
✅ **Server Actions**: Access user ID for database operations  
✅ **API Routes**: Verify authentication and use user ID  
✅ **Error Handling**: Handle loading and error states  
✅ **Pre-built Components**: Use `UserProfile` and `NavLinks` directly  

Choose the pattern that fits your use case!
