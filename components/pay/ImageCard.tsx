import * as React from "react";

interface ImageCardProps {
  src: string;
  alt: string;
}

export const ImageCard: React.FC<ImageCardProps> = ({ src, alt }) => {
  return (
    <img
      loading="lazy"
      src={src}
      alt={alt}
      className="w-1/3 p-2"
    />
  );
};