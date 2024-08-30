import Image from "next/image";
import Link from "next/link";
import React from "react";

export const Cards = ({
  text,
  image,
  url,
}: {
  text: string;
  image: string;
  url: string;
}) => {
  return (
    <Link href={url}>
      <div className="min-w-[326px] min-h-[394px] rounded-xl relative mx-4 ">
        <Image src={image} fill={true} alt={image} className="rounded-xl" />
        <h2 className="w-[250px] absolute bottom-10 left-10  text-white hover:underline hover:bg-indigo-600 text-3xl font-semibold">
          {text}
        </h2>
      </div>
    </Link>
  );
};
