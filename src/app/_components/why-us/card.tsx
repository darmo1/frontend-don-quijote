import Image from "next/image";
import React from "react";

export const Card = ({
  src,
  title,
  description,
}: {
  src: string;
  title: string;
  description: string;
}) => {
  return (
    <div className="flex flex-col justify-center items-center w-72">
      <Image src={src} alt={title} width={78} height={92} className="my-8" />
      <h2 className="font-semibold text-md text-wrap text-center">{title}</h2>
      <p className="text-ligh text-wrap my-4 text-center">{description}</p>
    </div>
  );
};
