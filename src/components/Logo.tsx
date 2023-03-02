import React from 'react';

type Props = {};

const Logo = ({ src, alt, width, height }) => {
  return <div className="logo-container pl-2">{src.length > 0 ? <img src={src} alt={alt} width={width} height={height} /> : <span>Logo</span>}</div>;
};

export default Logo;
