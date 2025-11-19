import { PayHero } from "@/components/PayHero";
import { ImageGallery } from "@/components/pay/ImageGallery";
import { PaymentFeatures } from "@/components/pay/PaymentFeatures";
import { Header } from "@/components/Header";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "MerxPay",
  description: "A modern e-commerce platform built with Next.js",
};

export default function MerxPay() {
    return (
        <div className="">
            {/* <Header /> */}
            <PayHero/>       
            <ImageGallery />
            <PaymentFeatures />
           
        </div>
    );

}