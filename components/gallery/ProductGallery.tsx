import * as React from "react";
import { ProductImage } from "./ProductImage";
import { ProductCard } from "./ProductCard";

const productData = [
  {
    imageSrc:"https://cdn.builder.io/api/v1/image/assets/TEMP/5d8b66bfbf0a5378d0c9849a2f5b6118b63ddcb72c756ae151120def55da76a9?apiKey=2c0ef7d7caa24d8d8c04d3962010fc58&",
    title: "Discounts and Promotions",
    overlayImageSrc: "images/a-3d-image-representing-discounts.png",
    iconSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/ac2ba3bba83a711cd5ec1e00c9be7afa0d149098ed8f6aa5f985d637b005e024?apiKey=2c0ef7d7caa24d8d8c04d3962010fc58&"
  },
  {
    imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/5d8b66bfbf0a5378d0c9849a2f5b6118b63ddcb72c756ae151120def55da76a9?apiKey=2c0ef7d7caa24d8d8c04d3962010fc58&",
    title: "African Products",
    overlayImageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/912c8e66b324dbbd65fb24db83c233a563c4f3c3350c11ee06c02e2e077675a4?apiKey=2c0ef7d7caa24d8d8c04d3962010fc58&",
    iconSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/ac2ba3bba83a711cd5ec1e00c9be7afa0d149098ed8f6aa5f985d637b005e024?apiKey=2c0ef7d7caa24d8d8c04d3962010fc58&"
  },
  {
    imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/5d8b66bfbf0a5378d0c9849a2f5b6118b63ddcb72c756ae151120def55da76a9?apiKey=2c0ef7d7caa24d8d8c04d3962010fc58&",
    title: "Electronics",
    overlayImageSrc: "images/various-electronics-goods.png",
    iconSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/ac2ba3bba83a711cd5ec1e00c9be7afa0d149098ed8f6aa5f985d637b005e024?apiKey=2c0ef7d7caa24d8d8c04d3962010fc58&",
  },
  // {
  //   imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/5d8b66bfbf0a5378d0c9849a2f5b6118b63ddcb72c756ae151120def55da76a9?apiKey=2c0ef7d7caa24d8d8c04d3962010fc58&",
  //   title: "Back To school",
  //   overlayImageSrc: "images/getting-ready-for-school.png",
  //   iconSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/ac2ba3bba83a711cd5ec1e00c9be7afa0d149098ed8f6aa5f985d637b005e024?apiKey=2c0ef7d7caa24d8d8c04d3962010fc58&",
  // }

];

export const ProductGallery: React.FC = () => {
  return (
    <div className="bg-white pt-2 px-4 flex flex-wrap gap-4 items-center text-2xl font-semibold text-slate-900 ml-8 ">
      {/* <ProductImage
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/148ac3efceb707e4f9b8fc7204f5a6a03a046e9d6fea6379b04b0add498543e4?apiKey=2c0ef7d7caa24d8d8c04d3962010fc58&"
        alt="Featured product"
        className="object-contain shrink-0 self-stretch my-auto aspect-[1.38] min-w-[240px] w-[415px] hover:scale-105 transition-transform duration-300 ease-in-out"
      /> */}
      
      {productData.map((product, index) => (
        <ProductCard
          key={index}
          imageSrc={product.imageSrc}
          title={product.title}
          overlayImageSrc={product.overlayImageSrc}
          iconSrc={product.iconSrc}
        />
      ))}

      {/* <ProductImage
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/5d8b66bfbf0a5378d0c9849a2f5b6118b63ddcb72c756ae151120def55da76a9?apiKey=2c0ef7d7caa24d8d8c04d3962010fc58&"
        alt="African product"
        className="object-contain shrink-0 self-stretch my-auto aspect-[1.38] min-w-[240px] w-[415px] hover:scale-105 transition-transform duration-300 ease-in-out"
        //overlayImageSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/912c8e66b324dbbd65fb24db83c233a563c4f3c3350c11ee06c02e2e077675a4?apiKey=2c0ef7d7caa24d8d8c04d3962010fc58&"
        iconSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/ac2ba3bba83a711cd5ec1e00c9be7afa0d149098ed8f6aa5f985d637b005e024?apiKey=2c0ef7d7caa24d8d8c04d3962010fc58&"
      /> */}
      
      {/* <ProductImage
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/7381d17bd354a6e0e212c89bc1a920a1ddf43769727de7f5ceda0600d46da13f?apiKey=2c0ef7d7caa24d8d8c04d3962010fc58&"
        alt="Additional product"
        className="object-contain shrink-0 self-stretch my-auto aspect-[1.38] min-w-[240px] w-[415px] hover:scale-105 transition-transform duration-300 ease-in-out"
      /> */}
      
      <div className="flex shrink-0 self-stretch my-auto h-[100px] min-w-[240px] w-full" />
    </div>
  );
}