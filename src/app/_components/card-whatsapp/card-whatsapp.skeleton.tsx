import ContentLoader from "react-content-loader"

const CardWhatsappSkeleton = () => (
  <ContentLoader 
    speed={2}
    width={450}
    height={450}
    viewBox="0 0 400 400"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    className="mx-auto rounded-lg"
  >
    <rect x="9" y="4" rx="0" ry="0" width="400" height="400" /> 
    <rect x="82" y="121" rx="0" ry="0" width="1" height="0" />
  </ContentLoader>
)

export default CardWhatsappSkeleton
