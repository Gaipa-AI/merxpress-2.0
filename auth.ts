'use server'
import NextAuth from 'next-auth';
import Credentials from 'next-auth/providers/credentials';
import { authConfig } from './auth.config';
import { z } from 'zod';
import type { User } from '@/db/definitions';
import bcrypt from 'bcrypt';
import postgres from 'postgres';
//import { neon } from "@neondatabase/serverless";

//const sql = neon(`${process.env.DATABASE_URL}`);
 
const sql = postgres(process.env.DATABASE_URL!);
 
async function getUser(email: string): Promise<User | undefined> {
  try {
    //const user = await sql<User[]>`SELECT * FROM users WHERE email=${email}`;
    const user = await sql<User[]>`
      SELECT * FROM users WHERE email=${email}
    `;
    return user[0];
  } catch (error) {
    console.error('Failed to fetch user:', error);
    throw new Error('User doesn`t exist.');
  }
}

export async function createUser(name: string, email: string, password: string): Promise<User> {
  const hashedPassword = await bcrypt.hash(password, 10);
  try {
    const result = await sql<User[]>`
      INSERT INTO users (username, email, password)
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
 
          if (passwordsMatch) return user;
        }
 
        return null;
      },
    }),
  ],
});