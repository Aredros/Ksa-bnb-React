import React from "react";

const Banner = ({ src, alt, text }) => {
  return (
    <div className="banner">
      <img className="bannerimg" src={src} alt={alt} />
      <h1>{text}</h1>
    </div>
  );
};

export default Banner;