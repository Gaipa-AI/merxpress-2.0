import * as React from "react";
import { ImageCard } from "./ImageCard";

const galleryImages = [
  {
    src: "https://cdn.builder.io/api/v1/image/assets/TEMP/5f8dcced45eac46820a7b390170dd0d742d771cc7100d269d0291dd88a8a9c62?placeholderIfAbsent=true&apiKey=2c0ef7d7caa24d8d8c04d3962010fc58",
    alt: "Gallery image 1"
  },
  {
    src: "https://cdn.builder.io/api/v1/image/assets/TEMP/95391ac0cc0a8679aa3abe7816d7b5adfd82d20cdbdbf02a2722efe380824888?placeholderIfAbsent=true&apiKey=2c0ef7d7caa24d8d8c04d3962010fc58",
    alt: "Gallery image 2"
  },
  {
    src: "https://cdn.builder.io/api/v1/image/assets/TEMP/32168476a237818d44d2789fe07528395c43f5ba0f4bc43a6b9649f177943df5?placeholderIfAbsent=true&apiKey=2c0ef7d7caa24d8d8c04d3962010fc58",
    alt: "Gallery image 3"
  }
];

export const ImageGallery: React.FC = () => {
  return (
    <div className="bg-white flex flex-wrap items-center w-full p-4 mt-10">
      {galleryImages.map((image, index) => (
        <ImageCard
          key={index}
          src={image.src}
          alt={image.alt}
        />
      ))}
    </div>
  );
};