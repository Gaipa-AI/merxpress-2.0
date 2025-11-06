'use client'
import * as React from "react";
import { ItemCard } from "./ItemCard";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";
import { ProductData } from "@/db/definitions";
import Autoplay from "embla-carousel-autoplay";

const products: ProductData[] = [
    // ... (your existing product data)
    {
        id: "1",
        price: 379.00,
        title: "Nintendo Switch™ Mario Kart™ 8 Deluxe Bundle",
        description: "Full Game Download + 3 Mo. Nintendo Switch Online Membership Included",
        //imageUrl: `https://cdn.builder.io/api/v1/image/assets/TEMP/4357e4576d07360a680141b648322792c7db4c075130df9a3cf3dfe428119e83?apiKey=2c0ef7d7caa24d8d8c04d3962010fc58&`
        imageUrl:'products/nintendo-switch.png'
      },
      {
        id: "2",
        price: 329.09,
        title: "Dyson Airwrap Complete Long",
        description: "Multi-styler for long hair, includes barrels and brushes, without extreme heat",
        imageUrl: "products/dyson-hair.png"
      },
      {
        id: "3",
        price: 139.95,
        title: "STAUB Cast Iron Dutch Oven 0.5-qt Round Cocotte",
        description: "Made in France, Serves 1, Matte Black",
        imageUrl: "https://cdn.builder.io/api/v1/image/assets/TEMP/e2f9cf814b41318de69e8b298333c0b0099165989a7afd53bfe20a719c4fb11d?apiKey=2c0ef7d7caa24d8d8c04d3962010fc58&"
      },
      {
        id: "4",
        price: 264.09,
        originalPrice: 300.09,
        discount: 5,
        title: "Apple AirPods Pro 2nd Generation",
        description: "Wireless MagSafe Charging Case (USB-C) with Apple 1 Year Limited Warranty",
        imageUrl: "products/apple-speaker.png"
      },
      {
        id: "5",
        price: 139.09,
        title: "Fujifilm Instax Mini 12 Instant Camera Lilac Purple",
        description: "Fuji Film Value Pack (40 Sheets) + Shutter Accessories Bundle, Incl. Compatible Carrying Case",
        imageUrl: "products/camera.png"
      },
      {
        id: "6",
        price: 59.09,
        title: "LEGO Icons Bouquet of Roses Building Set",
        description: "Artificial Flowers for Dinner Table Centerpieces, Adults Ages 18+ - Fall & Thanksgiving Flower",
        imageUrl: "products/lego-roses.png"
      },
      {
        id: "7",
        price: 349.09,
        originalPrice: 399.09,
        discount: 13,
        title: "G-Shock Watch",
        description: "G-stock Analog watch 200M Water Resistant, Black Dial, Resin Band",
        imageUrl: "products/gshock-watch.png"
      },
      {
        id: "8",
        price: 24.99,
        title: "THERMOS Stainless King Vacuum-Insulated Travel Mug",
        description: "16 Ounce, Matte Stainless Steel",
        imageUrl: "products/thermos.png"
      }
];

export const ItemDisplay: React.FC = () => {
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  )
    return (
        <div className="flex flex-col mt-4 w-full max-md:mt-10 max-md:max-w-full">
            <h1 className="text-2xl font-bold mb-8 text-slate-900 max-md:max-w-full">Popular Items</h1>
            <Carousel
              plugins={[plugin.current]}
              onMouseEnter={plugin.current.stop}
              onMouseLeave={plugin.current.reset}
              opts={{
                  align: "start",
                }}
                className="w-full max-w-screen"
            >
                <CarouselPrevious>
                    <button className="text-slate-900">Previous</button>
                </CarouselPrevious>
                
                <CarouselContent className="p-2">
                    {products.map((product) => (
                        <CarouselItem key={product.id} className="md:basis-1/2 lg:basis-1/4 flex flex-row mb-4">
                            <ItemCard product={product} />
                        </CarouselItem>
                    ))}
                </CarouselContent>
                <CarouselNext>
                    <button className="text-slate-900">Next</button>
                </CarouselNext>
            </Carousel>
        </div>
    );
};