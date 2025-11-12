
import { Dock, House, Users} from 'lucide-react'
import { auth } from '@/auth';

// Map of links to display in the side navigation.
// Depending on the size of the application, this would be stored in a database.
const links = [
  { name: 'Home', href: '/home', icon: House },
  {
    name: 'Login',
    href: '/login',
    icon: Dock,
  },
  { name: 'Account', href: '/dashboard', icon: Users },
];

export default async function NavLinks() {
  const session = await auth();
  
  return (
    <>
      {links.map((link) => {
        const LinkIcon = link.icon;
        // Hide login link if user is logged in
        if (link.name === 'Login' && session?.user) {
          return null;
        }
        
        return (
          <a
            key={link.name}
            href={link.href}
            className="flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3"
          >
            <LinkIcon className="w-6" />
            <p className="hidden md:block">{link.name}</p>
          </a>
        );
      })}
      
      {session?.user && (
        <div className="mt-4 rounded-md bg-blue-50 p-3">
          <p className="text-xs font-semibold text-gray-600">Logged in as:</p>
          <p className="text-sm font-medium text-gray-900 truncate">{session.user.name}</p>
          <p className="text-xs text-gray-600 truncate">{session.user.email}</p>
        </div>
      )}
    </>
  );
}