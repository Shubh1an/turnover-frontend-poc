import React from "react";
import MobileImageCarousel from "../ProductDetailsWeb/components/MobileImageCarousel";
import { IProductDetials } from "../ProductDetailsWeb/Models/interfaces/productInterface";
import Accordian from "@/components/Accordian/Accordian";
import ProductDetailsTab from "../ProductDetailsWeb/ProductDescripition/components/Tabs/ProductDetailsTab";
import ReviewAndRating from "../ProductDetailsWeb/ProductDescripition/components/Tabs/ReviewAndRating";
import ShippingAndReturnPolicy from "../ProductDetailsWeb/ProductDescripition/components/Tabs/ShippingAndReturnPolicy";
import ProductTitleBox from "../ProductDetailsWeb/components/ProductTitleBox";
import PriceCard from "../ProductDetailsWeb/components/PriceCard";
import IconTextBox from "../ProductDetailsWeb/components/CouponBox";
import IconList from "@/assets/images/svg";
import Image from "next/image";
import FlavourBox from "../ProductDetailsWeb/components/FlavourBox";
import AddToCartBox from "../ProductDetailsWeb/components/AddToCartBox";
import ReferBox from "../ProductDetailsWeb/components/ReferBox";
type Props = {
  productDetials: IProductDetials;
};

const ProductDetalMobile = ({ productDetials }: Props) => {
  let price = productDetials?.offerPrice?.toFixed(2).toString()?.split(".");
  const accordianItems = [
   { title:"Product Details",component:<ProductDetailsTab productDetials={productDetials} />},
   {title:"Reviews & Ratings", component:<ReviewAndRating productDetials={productDetials} />},
    {title:"Shipping & Return Policy", component:<ShippingAndReturnPolicy productDetials={productDetials} />},
  ];
  return (
    <div>
      <MobileImageCarousel
        productImageList={productDetials?.productDetails.productImgs}
      />
      <div className="my-3 w-[90%] mx-auto">
        <ProductTitleBox
          brand={productDetials?.productDetails.brand}
          prodectName={productDetials?.prodectName}
          upc={productDetials?.upc}
        />
      </div>
      <div className="w-[90%] mx-auto">
        <PriceCard
          price={productDetials?.price}
          offer={productDetials?.offer}
          MSRP={productDetials?.MSRP}
          offerPrice={price}
        />
      </div>
      <div className="border-t-2">
        <IconTextBox
          className="my-3 mt-10 w-full justify-center"
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
      </div>
      <div className="mt-10 mb-6 w-[90%] mx-auto">
        <p className="text-sm text-gray-400 mb-3">Discount Coupouns</p>
        <div className="flex items-center justify-center gap-3">
          <IconTextBox
            className="my-3  w-full justify-center"
            iconPosition="start"
            titleText={<p className="text-black">Get 5% off</p>}
            icon={IconList?.OfferCupon}
          >
            <p className="text-gray-900 text-xs">
              Use SAVE5 to get $5 off on the grocery, snacks on the app
            </p>
          </IconTextBox>
          <IconTextBox
            className="my-3  w-full justify-center"
            iconPosition="start"
            titleText={<p className="text-black">Get 5% off</p>}
            icon={IconList?.OfferCupon}
          >
            <p className="text-gray-900 text-xs">
              Use SAVE5 to get $5 off on the grocery, snacks on the app
            </p>
          </IconTextBox>
        </div>
      </div>
      <IconTextBox
        className="my-4 mb-10 py-5 border-y-2 px-3"
        titleText={
          <p className="text-black font-bold text-xs flex gap-0.5">
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
      <div className="my-6 w-[90%] mx-auto">
        <p className="text-slate-400 text-sm mb-2">Flavour</p>
        <FlavourBox
          flavourList={productDetials?.flavours}
          productFlavour={productDetials?.productDetails?.flavour}
        />
      </div>
      <div className="flex my-10 mb-4 w-[90%] mx-auto">
        <AddToCartBox quantity={productDetials?.quantity} />
      </div>
      <IconTextBox
        className="my-2 mb-4 py-5 px-3"
        titleText={
          <p className="text-black font-bold text-xs flex gap-0.5">
            <span className="font bold">14 days</span> hassle free return
            available
          </p>
        }
        icon={IconList?.Return}
      />
      <ReferBox className=" bg-white py-4 px-4 border-y-2 rounded-lg mb-6 text-sm" />
      <div className="w-[90%] mx-auto space-y-6">
        {accordianItems.map((el, ind) => (
          <Accordian key={ind} headerClassName={ind>0?"border-t-2 py-4":""} header={<p className="font-bold text-sm text-black">{el?.title}</p>}>
            {el?.component}
          </Accordian>
        ))}
      </div>
    </div>
  );
};

export default ProductDetalMobile;
