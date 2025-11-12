# Quick Reference: Session Management

## 📋 TL;DR - Display User Data After Login

### Server Component (Recommended for protected pages)
```tsx
import { auth } from '@/auth';
import { redirect } from 'next/navigation';

export default async function Page() {
  const session = await auth();
  if (!session?.user) redirect('/login');
  
  return <h1>Welcome {session.user.name}!</h1>;
}
```

### Client Component
```tsx
'use client';
import { useSession } from '@/hooks/useSession';

export default function Component() {
  const { session, loading } = useSession();
  
  if (loading) return <div>Loading...</div>;
  return <h1>Welcome {session?.user?.name}!</h1>;
}
```

---

## 🔧 What Was Fixed

| Issue | Solution |
|-------|----------|
| Session returns empty | Updated JWT callback to store user data |
| User data not in session | Updated session callback to populate user fields |
| `nav-links.tsx` not showing user | Changed to use `auth()` directly and display user info |
| No client-side session hook | Created `useSession()` hook in `hooks/useSession.ts` |
| Credentials not returning user data | Updated Credentials provider to return user without password |

---

## 📁 New Files Created

1. **`hooks/useSession.ts`** - Client-side session hook with `useSession()` and `useIsAuthenticated()`
2. **`components/UserProfile.tsx`** - Ready-to-use user profile component with sign-out button
3. **`lib/serverSession.ts`** - Server-side utilities for accessing session
4. **`SESSION_MANAGEMENT.md`** - Complete guide (this file)
5. **`DASHBOARD_EXAMPLE.tsx`** - Example dashboard page

---

## ✅ Files Modified

1. **`auth.ts`** - Now returns user data (id, name, email) in credentials flow
2. **`auth.config.ts`** - JWT callback stores all user fields; session callback populates user data
3. **`app/ui/nav-links.tsx`** - Now displays user name and email when logged in

---

## 🎯 Usage Examples

### Display in Navigation Bar
```tsx
import NavLinks from '@/app/ui/nav-links';

export default function Header() {
  return <nav><NavLinks /></nav>;
}
```
✨ Now shows "Logged in as: [Name] [Email]" when user is authenticated

### Display in Dashboard
```tsx
import { auth } from '@/auth';

export default async function Dashboard() {
  const session = await auth();
  return <h1>{session?.user?.email}</h1>;
}
```

### Conditional Rendering
```tsx
'use client';
import { useIsAuthenticated } from '@/hooks/useSession';

export default function Content() {
  const { isAuthenticated } = useIsAuthenticated();
  return isAuthenticated ? <Dashboard /> : <LoginPrompt />;
}
```

### Sign Out Button
```tsx
'use client';
import { signOut } from 'next-auth/react';

export default function SignOutButton() {
  return <button onClick={() => signOut({ callbackUrl: '/login' })}>Sign Out</button>;
}
```

---

## 🔐 Session Data Available

After login, you have access to:
- `session.user.id` - Unique user identifier
- `session.user.name` - User's name
- `session.user.email` - User's email
- `session.user.role` - User's role (if set)

---

## ⚠️ Common Mistakes

❌ Using `getServerSession()` instead of `auth()`
```tsx
// Don't do this
const session = await getServerSession(); // Wrong
```

✅ Use the imported `auth()` directly
```tsx
// Do this
import { auth } from '@/auth';
const session = await auth(); // Correct
```

---

❌ Using `useSession()` in a Server Component
```tsx
// Don't do this
export default async function Page() {
  const { session } = useSession(); // Error!
}
```

✅ Use `auth()` in Server Components
```tsx
// Do this
export default async function Page() {
  const session = await auth(); // Correct
}
```

---

## 🧪 Testing Your Setup

1. **Test Login**: Visit `/login` and log in with your credentials
2. **Test Server Session**: Visit `/dashboard` - should show user data
3. **Test Navigation**: Look at the nav-links - should show user name and email
4. **Test API Session**: Visit `/api/auth/session` in browser - should return user data

---

## 📚 Related Documentation

- NextAuth.js: https://next-auth.js.org/
- Session Callbacks: https://next-auth.js.org/configuration/callbacks#session-callback
- JWT Callbacks: https://next-auth.js.org/configuration/callbacks#jwt-callback
