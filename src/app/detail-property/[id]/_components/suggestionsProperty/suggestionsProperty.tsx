import { CardProperty } from "@/app/_components/card-property";
import { ResponseGetAllData } from "@/app/all-properties/page";
import { v4 } from "uuid";

export const SuggestionsProperty = ({
  suggestions,
}: {
  suggestions: ResponseGetAllData[];
}) => {
  return (
    <div>
      {suggestions.map((suggestion) => (
        <CardProperty {...suggestion} key={v4()} />
      ))}
    </div>
  );
};
