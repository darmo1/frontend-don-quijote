import { NextResponse } from "next/server";

export type RestCountryProps = {
  name: {
    common: string;
  };
  idd: {
    root: string;
    suffixes?: string[];
  };
  flags: {
    svg: string;
  };
};

export type ResponseCallingCode = {
  name: string;
  code: string;
  flag: string;
}[];

const defaultResponse = [
  {
    name: "Colombia",
    code: "+57",
    flag: "https://flagcdn.com/co.svg",
  },
]
export async function GET() {
  try {
    const res = await fetch("https://restcountries.com/v3.1/all");
    if( !res.ok ){
      throw new Error('error api')
    }
    const data: RestCountryProps[] = await res.json();
    const callingData = data.map(({ name, flags, idd }) => {
      return {
        name: name.common,
        code: `${idd.root}${idd.suffixes ? idd.suffixes[0] : ""}`,
        flag: flags.svg
      };
    });
    return NextResponse.json(callingData, { status: 200 })
  
  } catch (error) {
    console.log({ error })
    return NextResponse.json( defaultResponse, { status: 201 })
  }
}
