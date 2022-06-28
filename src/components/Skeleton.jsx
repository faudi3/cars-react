import React from "react"
import ContentLoader from "react-content-loader"

const Skeleton = (props) => (
  <ContentLoader 
    speed={2}
    width={350}
    height={223}
    viewBox="0 0 350 223"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <rect x="41" y="1" rx="0" ry="0" width="233" height="19" /> 
    <rect x="0" y="34" rx="0" ry="0" width="338" height="138" /> 
    <rect x="6" y="181" rx="0" ry="0" width="203" height="17" /> 
    <rect x="226" y="181" rx="12" ry="12" width="111" height="17" />
  </ContentLoader>
)

export default Skeleton;