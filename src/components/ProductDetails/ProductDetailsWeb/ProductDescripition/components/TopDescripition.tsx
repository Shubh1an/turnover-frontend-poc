import React from "react";
import Image from "next/image";
import IconList from "@/assets/images/svg";

import { IProductDetials } from "../../Models/interfaces/productInterface";
import IconTextBox from "../../components/CouponBox";
import FlavourBox from "../../components/FlavourBox";
import AddToCartBox from "../../components/AddToCartBox";
import ReferBox from "../../components/ReferBox";
import PriceCard from "../../components/PriceCard";
import ProductTitleBox from "../../components/ProductTitleBox";
type Props = {
  productDetials: IProductDetials;
};

const TopDescripition = ({ productDetials }: Props) => {
  let price = productDetials?.offerPrice?.toFixed(2).toString()?.split(".");
  return (
    <div>
       <div className="mb-2">
         <ProductTitleBox brand={productDetials?.productDetails.brand} prodectName={productDetials?.prodectName} upc={productDetials?.upc} />
       </div>
      
       <PriceCard price={productDetials?.price} offer={productDetials?.offer} MSRP={productDetials?.MSRP} offerPrice={price} />
     
      <div>
        <IconTextBox
          className="my-3 mt-10"
          titleText={
            <p className="text-black">
              Get 10% off on{" "}
              <span className="underline font-bold hover:cursor-pointer">
                Business
              </span>{" "}
              login
            </p>
          }
          icon={IconList?.OfferCupon}
        />
        <IconTextBox
          className="my-4 mb-10"
          titleText={
            <p className="text-black font-bold flex gap-0.5">
              Buy More, Save More
              <span className="text-base">
                <Image
                  src={IconList?.Plus}
                  priority
                  alt="offer"
                  className=" "
                  width={16}
                  height={16}
                />
              </span>
            </p>
          }
          icon={IconList?.Hand}
        />
        <div className="w-fit">
          <div className="my-6">
            <p className="text-slate-400 text-sm mb-2">Flavour</p>
            <FlavourBox
              flavourList={productDetials?.flavours}
              productFlavour={productDetials?.productDetails?.flavour}
            />
          </div>
          <div className="flex mt-10">
            <AddToCartBox quantity={productDetials?.quantity} />
          </div>
        </div>
      </div>
      <ReferBox className=" bg-gray-100 py-4 px-4 rounded-lg mt-10" />
    </div>
  );
};

export default TopDescripition;
