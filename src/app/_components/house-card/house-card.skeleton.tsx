import { v4 } from "uuid";
import { CardSkeleton } from "../card-skeleton";

export const HouseCardSkeleton = () => {
  const fillArray = Array(6).fill("_");
  return (
    <div className="flex flex-wrap">
      {fillArray.map((_) => (
        <CardSkeleton
          key={v4()}
          height={390}
          width={500}
          className="w-[500px] h-[390px] relative m-4"
        />
      ))}
    </div>
  );
};
