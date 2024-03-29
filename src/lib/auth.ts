// import CredentialsProvider from "next-auth/providers/credentials";
// import { NextAuthOptions } from "next-auth";
// import { PrismaAdapter} from "@next-auth/prisma-adapter";
// import { db } from "./db";
// import { compare } from "bcrypt";

// export const authOptions:NextAuthOptions = {
//     adapter:PrismaAdapter(db),
//     secret:process.env.NEXTAUTH_URL_SECRET,
//     session:{
//         strategy: 'jwt'
//     },
//     pages:{
//         signIn: '/sign-in',
//     },
//     providers: [
//         CredentialsProvider({
//           name: "Credentials",
//           credentials: {
//             email: { label: "Email", type: "email", placeholder: "Enter your email address" },
//             password: { label: "Password", type: "password" }
//           },
//           async authorize(credentials) {
//             if(!credentials?.email || !credentials?.password){
//                 return null;
//             }

//             const existingUser = await db.user.findUnique({
//                 where:{
//                     email: credentials?.email
//                 }
//             });
//             if(!existingUser){
//                 return null;
//             }

//             const passwordMatch = await compare(credentials.password, existingUser.password);
//             if (!passwordMatch) {
//               return null;
//             }

//             return {
//                 id: `${existingUser.id}`,
//                 username: existingUser.username,
//                 email: existingUser.email,
//             }
      
//           }
//         })
//       ],
//       callbacks:{
//         async jwt({token, user}){
//           if(user){
//             return{
//               ...token,
//               username: user.username
//             }
//           }
//           return token
//         },
//         async session({session, token}){
//           return{
//             ...session,
//             user: {
//               ...session.user,
//               username: token.username
//             }
//           }
//         },
//       }
// }









// import {jwtVerify, SignJWT} from "jose"


// interface UserJwtPayload{
//   jti: string
//   iat: number
// }

// export const getJwtSecretKey= () => {
//   const secret = process.env.NEXTAUTH_SECRET

//   if(!secret || secret.length === 0) {
//     throw new Error("No JWT Secret Keythreshold")
//   }

//   return secret;
// }

// export const verifyAuth = async (token: string) => {
//   try {
//     const verified = await jwtVerify(token, new TextEncoder().encode(getJwtSecretKey()))
//     return verified.payload as UserJwtPayload
//   } catch (error) {
//     throw new Error("Yout token has expired")
//   }
// }