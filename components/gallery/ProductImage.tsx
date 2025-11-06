import * as React from "react";
import { ProductImageProps } from "./types";

export const ProductImage: React.FC<ProductImageProps> = ({ src, className, alt }) => (
  <img
    loading="lazy"
    src={src}
    alt={alt}
    className={className}
  />
);