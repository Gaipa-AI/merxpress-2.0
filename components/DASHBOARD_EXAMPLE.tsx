/**
 * Example: Dashboard Page with User Session Data
 * This is a complete example of how to display user data after login
 */

import { auth } from '@/auth';
import { redirect } from 'next/navigation';

export default async function DashboardPage() {
  // Get the session
  const session = await auth();

  // Redirect to login if not authenticated
  if (!session?.user) {
    redirect('/login');
  }

  const user = session.user;

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-8">
      <div className="max-w-2xl mx-auto">
        {/* Welcome Header */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Welcome back, {user.name}! 👋
          </h1>
          <p className="text-gray-600">Here's your account information:</p>
        </div>

        {/* User Information Card */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <div className="space-y-4">
            <div className="border-b pb-4">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Full Name
              </label>
              <p className="text-lg text-gray-900">{user.name}</p>
            </div>

            <div className="border-b pb-4">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Email Address
              </label>
              <p className="text-lg text-gray-900">{user.email}</p>
            </div>

            {user.id && (
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  User ID
                </label>
                <p className="text-sm font-mono text-gray-500">{user.id}</p>
              </div>
            )}
          </div>
        </div>

        {/* Session Debug Info (remove in production) */}
        <details className="bg-white rounded-lg shadow-lg p-8">
          <summary className="cursor-pointer font-semibold text-gray-700">
            Session Debug Info
          </summary>
          <pre className="mt-4 bg-gray-100 p-4 rounded text-xs overflow-auto max-h-48">
            {JSON.stringify(session, null, 2)}
          </pre>
        </details>
      </div>
    </div>
  );
}
