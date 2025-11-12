'use client';

import { useSession } from '@/hooks/useSession';
import { signOut } from 'next-auth/react';
import { LogOut, Loader } from 'lucide-react';
import { Button } from '@/components/ui/button';

/**
 * UserProfile Component - Displays user information on the client side
 * Can be used in dashboards, headers, or any client component
 */
export default function UserProfile() {
  const { session, loading, error } = useSession();

  if (loading) {
    return (
      <div className="flex items-center gap-2">
        <Loader className="w-4 h-4 animate-spin" />
        <span>Loading...</span>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-red-500">
        Error loading profile: {error.message}
      </div>
    );
  }

  if (!session?.user) {
    return null;
  }

  return (
    <div className="flex items-center gap-4 p-4 bg-blue-50 rounded-lg">
      <div className="flex-1">
        <p className="text-sm font-semibold text-gray-600">User</p>
        <p className="font-medium text-gray-900">{session.user.name}</p>
        <p className="text-xs text-gray-600">{session.user.email}</p>
      </div>
      <Button
        variant="outline"
        size="sm"
        onClick={() => signOut({ callbackUrl: '/login' })}
      >
        <LogOut className="w-4 h-4 mr-2" />
        Sign Out
      </Button>
    </div>
  );
}
