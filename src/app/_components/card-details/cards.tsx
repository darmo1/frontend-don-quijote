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
    <div className="min-w-[326px] min-h-[394px] rounded-xl relative mx-4 ">
      <Image src={image} fill={true} alt={image} className="rounded-xl" />
      <Link href={url}>
        <h2 className="w-[250px] absolute bottom-10 left-10  text-white text-3xl font-semibold">{text}</h2>
      </Link>
    </div>
  );
};
