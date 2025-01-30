import { NextRequest,NextResponse } from "next/server";

export async function GET(req:NextRequest) {
  // const t = 
  // console.log(NextResponse.rewrite);
  return NextResponse.json({message:"hello word"},{status: 200})
}

export async function POST(req:NextRequest){
  try {
    const t = req.nextUrl.port
    console.log(t);
    return NextResponse.json({message:"hello word"},{status: 200})
  } catch (error) {
    console.log(error);
    
    return NextResponse.json({message:"hello word"},{status: 500})
  }
  
}