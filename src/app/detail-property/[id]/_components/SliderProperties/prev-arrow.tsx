import { CustomArrowProps } from "react-slick";

export function PrevArrow(props: CustomArrowProps) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "gray", borderRadius: "19px" }}
      onClick={onClick}
    />
  );
}
