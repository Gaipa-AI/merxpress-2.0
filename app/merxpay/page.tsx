import React from "react";
import { PayHero } from "@/components/PayHero";
import { ImageGallery } from "@/components/pay/ImageGallery";
import { PaymentFeatures } from "@/components/pay/PaymentFeatures";
export default function MerxPay() {
    return (
        <div className="">
           
            <PayHero/>       
            <ImageGallery />
            <PaymentFeatures />
           
        </div>
    );

}