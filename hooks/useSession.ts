'use client';

import { useEffect, useState } from 'react';
import type { Session } from 'next-auth';
import { auth } from '@/auth';
/**
 * Hook to fetch and manage session data on the client side
 * Returns the current session, loading state, and any errors
 */
export function useSession() {
  const [session, setSession] = useState<Session | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    async function getSession() {
      try {
        //const response = await fetch('/api/auth/session');
        const response = await auth();

        // if (!response.ok) {
        //   throw new Error('Failed to fetch session');
        // }
        // const data = await response.json();
        if (!response) {
          throw new Error('Failed to fetch session');
        }
        const data = response ;
        setSession(data);
      } catch (err) {
        setError(err instanceof Error ? err : new Error('Unknown error'));
        setSession(null);
      } finally {
        setLoading(false);
      }
    }

    getSession();
  }, []);

  return { session, loading, error };
}

/**
 * Hook to check if user is authenticated
 * Returns true if user is logged in, false otherwise
 */
export function useIsAuthenticated() {
  const { session, loading } = useSession();
  return { isAuthenticated: !!session?.user, loading };
}
