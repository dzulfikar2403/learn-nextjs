
import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

export async function middleware(req:NextRequest){

 (await cookies()).set('nt','halo rek bayu',{
    secure: true,
    httpOnly: true,
    path: '/',
    maxAge: 60,
  })

  return NextResponse.next()
}

export const config = {
  matcher: ['/']
}