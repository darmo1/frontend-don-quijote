import { endpoint } from "@/app/constant/endpoint";
import { NextResponse } from "next/server";


export async function GET() {
  try{
    const res = await fetch(endpoint.getMenuMunicipalities, {
      cache: 'reload'
    });
    const data = await res.json();
   
    return new Response(JSON.stringify(data))
  }catch(error){
    return NextResponse.json( error, { status: 500})
  }
}