import Image from "next/image";
import Link from "next/link";

export type ServiceCardProps = {
  src: string;
  title: string;
  url: string;
  index?: string 
}
export const ServiceCard = ({
  title,
  src,
  url,
  index 
}: ServiceCardProps) => {
  return (
    <div id={index} className="rounded-md min-w-[250px] h-[160px] flex bg-white border  px-4 py-2 hover:bg-gray-100">
      <div className="w-1/3 flex justify-center items-center">
        <Image src={src} width={86} height={87} alt={title} className="px-2"/>
      </div>
      <div className="w-2/3 flex flex-col justify-center  px-4 ">
        <h2 className="break-words text-md font-semibold"> {title} </h2>
        <Link href={url}>
          <p className="font-light text-xs hover:text-blue-800 hover:font-semibold">Ver más...</p>
        </Link>
      </div>
    </div>
  )
};
