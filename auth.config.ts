import type { NextAuthConfig } from 'next-auth';
import GoogleProvider from "next-auth/providers/google";
 
export const authConfig = {
  pages: {
    signIn: '/login',
  },
  callbacks: {
    authorized({ auth, request: { nextUrl } }) {
      const isLoggedIn = !!auth?.user;
      const isOnCart = nextUrl.pathname.startsWith('/cart');
      const isOnLoginPage = nextUrl.pathname.startsWith('/login');
      //const isOnMarketplace = nextUrl.pathname.startsWith('/marketplace');
      
      // 1️⃣ Prevent redirect loop
      if (isOnLoginPage) return true;

      // 2️⃣ Protect /cart
      if (isOnCart && !isLoggedIn) {
        return false; // Redirects to /login
      }

      // 3️⃣ Redirect authenticated users from login to marketplace
      if (isLoggedIn && isOnLoginPage) {
        return Response.redirect(new URL('/marketplace', nextUrl));
      }

      // 4️⃣ Allow access to other routes
      return true;
    },
  },
  providers: [
    GoogleProvider({
          profile(profile) {
            console.log("Profile Google: ", profile);
    
            let userRole = "Google User";
            return {
              ...profile,
              id: profile.sub,
              role: userRole,
            };
          },
          clientId: process.env.GOOGLE_ID,
          clientSecret: process.env.GOOGLE_Secret,
        })
   
  ], // Add providers with an empty array for now
  

} satisfies NextAuthConfig;