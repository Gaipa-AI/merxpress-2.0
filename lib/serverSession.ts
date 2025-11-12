/**
 * Server-side session utilities
 * Use these functions in Server Components to access session data
 */



/**
 * Get the current session on the server side
 * Usage in Server Component:
 * 
 * export default async function MyComponent() {
 *   const session = await getServerSession();
 *   return <div>{session?.user?.name}</div>;
 * }
 */
import { auth } from '@/auth';
export async function getServerSession() {
  return await auth();
}

/**
 * Get user data on the server side
 * Throws error if user is not authenticated
 */
export async function getServerUser() {
  const session = await auth();
  if (!session?.user) {
    throw new Error('User not authenticated');
  }
  return session.user;
}

/**
 * Check if user is authenticated on the server side
 */
export async function isServerAuthenticated() {
  const session = await auth();
  return !!session?.user;
}
