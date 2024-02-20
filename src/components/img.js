import React from "react";

const Img = ({ src, alt, className }) => {
  const [imageError, setImageError] = React.useState(false);

  const handleError = () => {
    setImageError(true);
  };

  return <>{imageError ? <div className={`${className} animate-pulse bg-slate-300`}></div> : <img src={src} alt={alt} className={`${className} bg-slate-300 `} onError={handleError} />}</>;
};

export default Img;
