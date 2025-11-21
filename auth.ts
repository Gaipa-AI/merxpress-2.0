'use server'
import NextAuth from 'next-auth';
import Credentials from 'next-auth/providers/credentials';
import GoogleProvider from "next-auth/providers/google";
import Auth0Provider from "next-auth/providers/auth0";
import { authConfig } from '@/auth.config';
import { z } from 'zod';
import type { User } from '@/db/definitions';
import bcrypt from 'bcrypt';
import postgres from 'postgres';
import GitHub from 'next-auth/providers/github';


const sql = postgres(process.env.DATABASE_URL!);
 
export async function getUser(email: string): Promise<User | undefined> {
  try {
    //const user = await sql<User[]>`SELECT * FROM neon_auth.users_sync WHERE email=${email}`;
    const user = await sql<User[]>`
      SELECT * FROM users WHERE email=${email}
    `;
    //console.log('Fetched user:', user);
    return user[0];
  } catch (error) {
    console.error('Failed to fetch user:', error);
    throw new Error('User doesn`t exist.');
  }
}

async function getUserById(id: string): Promise<User | undefined> {
  try {
    const user = await sql<User[]>`
      SELECT * FROM users WHERE id=${id}
    `;
    return user[0];
  } catch (error) {
    console.error('Failed to fetch user by ID:', error);
    return undefined;
  }
}

export async function createUser(name: string, email: string, password: string): Promise<User> {
  const hashedPassword = await bcrypt.hash(password, 10);
  try {
    const result = await sql<User[]>`
      INSERT INTO users (name, email, password)
      VALUES (${name}, ${email}, ${hashedPassword})
      RETURNING *;
    `;
    return result[0];
  } catch (error) {
    console.error('Failed to create user:', error);
    throw new Error('Failed to create user.');
  }
}


export const { auth, signIn, signOut } = NextAuth({
  ...authConfig,
  providers: [
    Credentials({
      async authorize(credentials) {
        const parsedCredentials = z
          .object({ email: z.string().email(), password: z.string().min(6) })
          .safeParse(credentials);
 
        if (parsedCredentials.success) {
          const { email, password } = parsedCredentials.data;
          const user = await getUser(email);
          if (!user) return null;
          const passwordsMatch = await bcrypt.compare(password, user.password);
 
          if (passwordsMatch) {
            // Return user data without password for security
            return {
              id: user.id,
              name: user.name,
              email: user.email,
            };
          }
        }
 
        return null;
      },
    }),
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
               clientId: process.env.GOOGLE_ID!,
               clientSecret: process.env.GOOGLE_SECRET!,
               redirectProxyUrl: process.env.GOOGLE_REDIRECT_URL,
             }),
      Auth0Provider({
           
           clientId: process.env.AUTH0_CLIENT_ID!,
           clientSecret: process.env.AUTH0_CLIENT_SECRET!,
           issuer: process.env.AUTH0_ISSUER!,
      }),
      GitHub({
          clientId: process.env.AUTH_GITHUB_ID!,
          clientSecret: process.env.AUTH_GITHUB_SECRET!,
         }),
  ],
});



//export const { handlers: { GET, POST }, auth } = NextAuth({...})
// import { object, string } from "zod"
 
// export const signInSchema = object({
//   email: string({ required_error: "Email is required" })
//     .min(1, "Email is required")
//     .email("Invalid email"),
//   password: string({ required_error: "Password is required" })
//     .min(1, "Password is required")
//     .min(8, "Password must be more than 8 characters")
//     .max(32, "Password must be less than 32 characters"),
// })