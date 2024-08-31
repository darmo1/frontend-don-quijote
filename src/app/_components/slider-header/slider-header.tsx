"use client";

import { ServiceCard } from "../service-card";
import { ServiceCardProps } from "../service-card/service-card";

export type SliderHeaderProps = {
  dataSlider: ServiceCardProps[];
};

export const SliderHeader = ({ dataSlider = [] }: SliderHeaderProps) => {
  return (
    <div className="w-full lg:w-[600px] flex items-center  py-4 px-2 relative gap-3">
      <div className="flex flex-wrap lg:flex-nowrap lg:overflow-x-scroll w-full lg:overflow-y-hidden gap-3">
        {dataSlider.map(({ title, src, url }, index) => (
          <ServiceCard
            key={title}
            src={src}
            title={title}
            url={url}
            index={String(index)}
          />
        ))}
      </div>
    </div>
  );
};
