import React from 'react';

interface Props {
  src: any;
  size: number;
  className?: string;
}

const CircleImage: React.FC<Props> = ({ src, size, className }) => {
  const style = {
    width: size,
    height: size,
    borderRadius: size / 2,
  };
  return <img src={src} alt="img" style={style} className={className} />;
};

export default CircleImage;
