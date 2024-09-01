import ContentLoader from "react-content-loader";

type CardSkeletonProps = {
  width?: number;
  height?: number;
  className?: string;
};
export const CardSkeleton = (
  { width = 450, height= 400, className= '' }: CardSkeletonProps 
) => (
  <ContentLoader
  width={width}
  height={height}
  viewBox={`0 0 ${width} ${height}`}
  backgroundColor="#f0f0f0"
  foregroundColor="#dedede"
  className={className}
>
  {/* Ajusta los valores de x, y, width, y height según las dimensiones */}
  <rect
    x={width/2 - ((width/2)/2 + 20)}
    y={height - 90} // Ajusta la posición en función de la altura
    rx="4"
    ry="4"
    width={Math.min(271, width - 30)} // Ajusta el ancho, asegurando que no sea mayor al contenedor
    height="9"
  />
  <rect
    x={width/2 - 70 }
    y={height - 70} // Ajusta la posición en función de la altura
    rx="3"
    ry="3"
    width={Math.min(119, width - 30)} // Ajusta el ancho, asegurando que no sea mayor al contenedor
    height="6"
  />
  <rect
    x="0"
    y="0"
    rx="10"
    ry="10"
    width={width}
    height={height - 100} // Ajusta la altura del rectángulo principal
  />
</ContentLoader>
  // <ContentLoader
  //   width={width}
  //   height={height}
  //   viewBox={`0 0 ${width} ${height} `}   
  //   backgroundColor="#f0f0f0"
  //   foregroundColor="#dedede"
  //   className={className}
  // >
  //   <rect x="0" y={String((height ? height : 400) + 15 - 8)} rx="4" ry="4" width="271" height="9" />
  //   <rect x="0" y={String((height ? height : 400) + 30 - 8)} rx="3" ry="3" width="119" height="6" />
  //   <rect x="0" y="0" rx="10" ry="10" width={String(width ? width : 500)} height={String(height ? height : 400)} />
  // </ContentLoader>
);
