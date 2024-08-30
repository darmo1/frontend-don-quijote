import { endpoint } from "@/app/constant/endpoint";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export async function middleware(request: NextRequest) {
  try{
  //1. Check if routes is protected
  const protectedRoutes = ["/"];
  const currentPath = request.nextUrl.pathname;
  const isProtectedRoute = protectedRoutes.includes(currentPath);

  if (isProtectedRoute) {
    //2. Check for valid session
    const token = cookies().get("jwt")?.value;
    if (!token) {
      // Si no hay token, redirige a la página de login
      //return NextResponse.redirect(new URL("/signin", request.url));
      const nextResponse = NextResponse.next();
      nextResponse.headers.set("x-user-loggin", JSON.stringify({
        isUserLogged: false
      }));
      return nextResponse;
    }

    //Redirect unauthed user
    const response = await fetch(endpoint.authUser, {
      headers: {
        authorization: `Bearer ${token}`,
      },
    });

    const userData = await response.json();
    
    if (!response.ok) {
      // Si la verificación del token falla, redirige a login
      return NextResponse.redirect(new URL("/signin", request.url));
    }

    // Añadir datos de usuario a los headers
    const nextResponse = NextResponse.next();
    nextResponse.headers.set("x-user-data", JSON.stringify(userData));
    nextResponse.headers.set("x-user-loggin", JSON.stringify({
      isUserLogged: true
    }));
    return nextResponse;
  }

  return NextResponse.next();
  }catch(error){
    console.log({ error })
  }
}


// const clientMiddleware = async (req: NextRequest ) => {
//   const d = req.nextUrl.pathname.split('/');
//   console.log({ d };)

//   req.headers.set('')
// } 
