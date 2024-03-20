// import { verifyAuth } from "@/lib/auth";
// import { NextRequest, NextResponse } from "next/server";

// export async function middleware(req: NextRequest){
//     const token = req.cookies.get('token')?.value
    
//     const verifiedToken = token && 
//     (await verifyAuth(token).catch((err)=>{
//         console.log(err);
//     }))

//     if(req.nextUrl.pathname.startsWith('/pages') && !verifiedToken){
//         return
//     }

//     if(req.url.includes('/pages') && verifiedToken){
//         return NextResponse.redirect(new URL('/',req.url))
//     }

//     if(!verifiedToken){
//         return NextResponse.redirect(new URL('/pages',req.url))
//     }

// }

// export const config = {
//     matcher: ['/','/pages'],
// }

import authConfig from "./auth.config"
import NextAuth from "next-auth"
import { DEFAULT_LOGIN_REDIRECT, apiAuthPrefix, authRoutes, publicRoutes } from "./routes";
const { auth } = NextAuth(authConfig)

export default auth((req) => {
    const { nextUrl } = req;
    const isLoggedIn = !!req.auth;

    const isApiAuthRoute = nextUrl.pathname.startsWith(apiAuthPrefix)
    const isPublicRoute = publicRoutes.includes(nextUrl.pathname);
    // // If user is not authenticated
    const isAuthRoutes = authRoutes.includes(nextUrl.pathname);

    if (isApiAuthRoute) {
        return;
    }

    
    if (isAuthRoutes) {
        if (isLoggedIn) {
            return Response.redirect(new URL(DEFAULT_LOGIN_REDIRECT, nextUrl))
        }
        return;
    }

    if(!isLoggedIn  && !isPublicRoute){ 
        return Response.redirect(new  URL("/auth/login", nextUrl))
    } 


    return;
})

// Optionally, don't invoke Middleware on some paths
export const config = {
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
}
