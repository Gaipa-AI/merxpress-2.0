# Session Management Guide

This guide explains how to create and load sessions to display user data after logging in.

## Overview

The authentication system has been updated to properly manage sessions and display user information. Here's what was implemented:

### Components

1. **auth.ts** - NextAuth configuration with proper session callbacks
2. **auth.config.ts** - Auth config with JWT and session callbacks
3. **Hooks** - Client-side utilities for accessing session data
4. **Server Utilities** - Server-side utilities for accessing session data

---

## How to Use

### 1. Display User Data in Server Components

Server Components can directly access the session using the `auth()` function:

```tsx
// app/dashboard/page.tsx
import { auth } from '@/auth';

export default async function DashboardPage() {
  const session = await auth();

  if (!session?.user) {
    return <div>Not authenticated</div>;
  }

  return (
    <div>
      <h1>Welcome, {session.user.name}!</h1>
      <p>Email: {session.user.email}</p>
    </div>
  );
}
```

### 2. Display User Data in Client Components

Use the `useSession()` hook to access session data in client components:

```tsx
// components/MyComponent.tsx
'use client';

import { useSession } from '@/hooks/useSession';
import { Loader } from 'lucide-react';

export default function MyComponent() {
  const { session, loading, error } = useSession();

  if (loading) return <Loader className="animate-spin" />;
  if (error) return <div>Error: {error.message}</div>;
  if (!session?.user) return <div>Not logged in</div>;

  return (
    <div>
      <h1>Hello, {session.user.name}!</h1>
      <p>{session.user.email}</p>
    </div>
  );
}
```

### 3. Check Authentication Status

Use the `useIsAuthenticated()` hook to check if a user is logged in:

```tsx
'use client';

import { useIsAuthenticated } from '@/hooks/useSession';

export default function ConditionalContent() {
  const { isAuthenticated, loading } = useIsAuthenticated();

  if (loading) return <div>Loading...</div>;

  return (
    <>
      {isAuthenticated ? (
        <div>User is logged in</div>
      ) : (
        <div>Please log in</div>
      )}
    </>
  );
}
```

### 4. Pre-built User Profile Component

A ready-to-use UserProfile component is available:

```tsx
// In any client component
import UserProfile from '@/components/UserProfile';

export default function Header() {
  return (
    <header>
      <nav>
        {/* Navigation items */}
        <UserProfile />
      </nav>
    </header>
  );
}
```

### 5. Server-side Utilities

Use server-side helper functions in Server Components:

```tsx
import { 
  getServerSession, 
  getServerUser, 
  isServerAuthenticated 
} from '@/lib/serverSession';

// Get the full session
const session = await getServerSession();

// Get just the user (throws error if not authenticated)
const user = await getServerUser();

// Check if user is authenticated
const isAuth = await isServerAuthenticated();
```

---

## Session Object Structure

After login, the session contains the following user information:

```typescript
{
  user: {
    id: string;           // Unique user ID
    name: string;         // User's name
    email: string;        // User's email
    role?: string;        // User's role (if set)
  },
  expires: string;        // Session expiration timestamp
}
```

---

## Key Files Modified/Created

- ✅ `auth.ts` - Updated to return complete user data in credentials flow
- ✅ `auth.config.ts` - Updated JWT and session callbacks
- ✅ `app/ui/nav-links.tsx` - Now displays user info when logged in
- ✅ `hooks/useSession.ts` - New client-side session hook
- ✅ `components/UserProfile.tsx` - Pre-built user profile component
- ✅ `lib/serverSession.ts` - Server-side session utilities

---

## How Sessions Work

1. **User Login** → `auth.ts` authenticates credentials
2. **JWT Creation** → `auth.config.ts` JWT callback stores user data in token
3. **Session Creation** → `auth.config.ts` session callback stores user data in session
4. **Access Session**:
   - **Server Components**: Use `await auth()` or helpers from `lib/serverSession.ts`
   - **Client Components**: Use `useSession()` hook from `hooks/useSession.ts`

---

## Environment Variables

Make sure you have these set in your `.env.local`:

```
NEXTAUTH_SECRET=your-secret-key
NEXTAUTH_URL=http://localhost:3000
DATABASE_URL=your-database-url
```

---

## Troubleshooting

### Session returns null in client component
- Verify `useSession()` hook is being used in a `'use client'` component
- Check that the user is logged in by visiting `/api/auth/session`
- Ensure NextAuth is properly configured in `route.ts`

### User data not showing
- Check browser console for errors
- Verify `NEXTAUTH_SECRET` is set
- Check that the JWT and session callbacks in `auth.config.ts` are properly storing user data

### Redirect loop on login
- Verify the `authorized` callback in `auth.config.ts` is working correctly
- Check that `callbackUrl` is being passed correctly from the login form
