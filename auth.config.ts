import type { NextAuthConfig } from "next-auth";
import { LoginSchema } from "./schemas";
import Credentials from "next-auth/providers/credentials";
import { getUserByEmail } from "./data/user";
import bcrypt from "bcryptjs";
import GithubProvider from "next-auth/providers/github"
import GoogleProvider from "next-auth/providers/google"

export default {
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_CLIENT_SECRET,
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
    Credentials({
      async authorize(credentials) {
        const validatedFields = LoginSchema.safeParse(credentials);

        if (validatedFields.success) {
          const { email, password } = validatedFields.data;

          const user = await getUserByEmail(email);
          
          if (!user || !user.password) return Promise.resolve(null);
          

          const passwordsMatch = await bcrypt.compare(
            password,
            user.password,
          );

          if (passwordsMatch) {
            console.log(user.name);
            console.log("Passwords match, returning user");
            return Promise.resolve(user);
            
          }
        }

        console.log("Invalid credentials, returning null");
        return Promise.resolve(null);
      },
    }),
  ],
} as NextAuthConfig;