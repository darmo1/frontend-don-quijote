import { endpoint } from "@/app/constant/endpoint";
import { NextResponse } from "next/server";


export async function GET() {
  try{
    const res = await fetch(endpoint.getMenuMunicipalities, 
      {
        next: {
          tags: ['getMunicipalities']
        }
      }
    );
    const data = await res.json();
    
    return new Response(JSON.stringify(data))
  }catch(error){
    
    const data:[] = []
    return NextResponse.json( JSON.stringify(data), { status: 500})
  }
}