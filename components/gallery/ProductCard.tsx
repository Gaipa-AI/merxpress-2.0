import * as React from "react";
import { ProductImage } from "./ProductImage";
import { ProductCardProps } from "./types";



export const ProductCard: React.FC<ProductCardProps> = ({
  imageSrc,
  title,
  overlayImageSrc,
  iconSrc
}) => (
  <div className="flex overflow-hidden flex-col self-stretch my-auto min-w-[240px] w-[415px]">
    <div className="flex overflow-hidden relative flex-col w-full aspect-[1.383] fill-slate-100 ">
      {/* Product image transition-transform duration-300 ease-in-out*/}
      <ProductImage
        src={imageSrc}
        alt="Product background"
        className="object-cover absolute inset-0 size-full"
      />
      <ProductImage
        src={iconSrc}
        alt="Product icon"
        className="object-contain self-end w-10 aspect-square fill-red-500"
      />
      <div className="flex relative flex-col pl-10 max-md:pl-5">
        <div className="z-10 self-start">{title}</div>
        <ProductImage
          src={overlayImageSrc}
          alt="Product overlay"
          className="object-contain self-end -mt-2 max-w-full rounded-none aspect-[1.42] w-[333px] hover:scale-105 transition-transform duration-300 ease-in-out"
        />
      </div>
    </div>
  </div>
);