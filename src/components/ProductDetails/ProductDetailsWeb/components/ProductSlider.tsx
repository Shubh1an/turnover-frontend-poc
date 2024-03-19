"use client";
import React, { useRef } from "react";
import { IProductListData } from "../Models/interfaces/productInterface";
import Image from "next/image";
import IconList from "@/assets/images/svg";
import PriceCard from "./PriceCard";
type Props = {
  ProductArr: IProductListData;
  heading: string;
  subheading?: string;
};

const ProductSlider = ({ ProductArr, heading, subheading }: Props) => {
  const sliderRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: number) => {
    if (sliderRef.current) {
      const scrollAmount = direction * sliderRef.current.offsetWidth * 0.75;
      const newPos = sliderRef.current.scrollLeft + scrollAmount;
      sliderRef.current.scrollTo({
        left: newPos,
        behavior: "smooth",
      });
    }
  };
  return (
    <div className="relative md:w-[90%] md:mx-auto md:border-none md:px-0 border-y-2 px-4">
      <div className="text-black my-10 mb-6">
        <p className="mb-2 md:text-2xl font-bold">{heading}</p>
        {subheading && <p className="text-xs md:text-xl">{subheading}</p>}
      </div>
      <button
        onClick={() => scroll(-1)}
        className="hidden md:grid place-items-center w-10 h-10 rounded-full shadow-md bg-white absolute top-1/2 left-2 transform -translate-y-1/2  z-10"
      >
        <Image
          src={IconList?.LeftArrow}
          priority
          alt="Main Product"
          className="  "
          width={24}
          height={24}
        />
      </button>
      <div
        id="image-slider"
        ref={sliderRef}
        className="whitespace-nowrap overflow-x-scroll flex gap-3 no-scrollbar "
      >
        {ProductArr?.items.map((product) => (
          <div key={product?.offer}>
            <div className="py-3 px-4 w-60 h-80  relative">
              <Image
                src={product?.imgURL}
                alt="offer"
                className=" "
                width={200}
                height={200}
              />

              <div className=" w-full absolute -bottom-1 left-1 mb-0 mt-2 text-end text-xs">
                <PriceCard
                  offerPrice={product?.offerPrice
                    .toFixed(2)
                    .toString()
                    .split(".")}
                  offer={product?.offer}
                  price={product?.price}
                  MSRP={product?.MSRP}
                  cardView={true}
                />
                <p className="my-1 text-xs text-gray-400 text-start">
                  {product?.brandName}
                </p>
                <p className=" text-gray-900 text-left text-wrap pr-1 pb-1.5">
                  {product?.fullName}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <button
        onClick={() => scroll(1)}
        className="hidden md:grid place-items-center w-10 h-10 rounded-full shadow-md bg-white absolute top-1/2 right-2 transform -translate-y-1/2  z-10 "
      >
        <Image
          src={IconList?.LeftArrow}
          priority
          alt="Main Product"
          className=" rotate-180"
          width={24}
          height={24}
        />
      </button>
    </div>
  );
};

export default ProductSlider;
