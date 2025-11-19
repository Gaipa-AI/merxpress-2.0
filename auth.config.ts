import type { NextAuthConfig } from 'next-auth';
import GitHub from "next-auth/providers/github";
import Google from 'next-auth/providers/google';

export const authConfig = {
  pages: {
    signIn: '/login',
  },
  callbacks: {
    authorized({ auth, request: { nextUrl } }) {
      const isLoggedIn = !!auth?.user;
      const isOnCart = nextUrl.pathname.startsWith('/cart');
      const isOnLoginPage = nextUrl.pathname.startsWith('/login');
      const isOnMarketplace = nextUrl.pathname.startsWith('/marketplace');
      
      // 1️⃣ Prevent redirect loop
      if (isOnLoginPage) return true;

      // 2️⃣ Protect /cart
      if (isOnCart && !isLoggedIn) {
        return false; // Redirects to /login
      }
      if (isOnMarketplace && !isLoggedIn) {
        return true; // Allow access to /marketplace
      }

      // 3️⃣ Redirect authenticated users from login to marketplace
      if (isLoggedIn && isOnLoginPage) {
        return Response.redirect(new URL('/marketplace', nextUrl));
      }

      // 4️⃣ Allow access to other routes
      return true;
    },
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
        token.name = user.name;
        token.email = user.email;
        token.role = (user as any).role;
      }
      return token;
    },
    async session({ session, token }) {
      if (token && session.user) {
        session.user.id = token.id as string;
        session.user.name = token.name as string;
        session.user.email = token.email as string;
        (session.user as any).role = token.role;
      }
      return session;
    },
  },
  providers: [
  //  GitHub({
  //   clientId: process.env.AUTH_GITHUB_ID!,
  //   clientSecret: process.env.AUTH_GITHUB_SECRET!,
  //  }),
  //   Google({
  //     clientId: process.env.GOOGLE_ID!,
  //     clientSecret: process.env.GOOGLE_SECRET!,
  //   }),

  ], // Add providers with an empty array for now
  
  secret: process.env.NEXTAUTH_SECRET,
} satisfies NextAuthConfig;
