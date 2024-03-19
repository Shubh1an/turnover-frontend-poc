"use client";

import Image from "next/image";
import React, { useState } from "react";
import IconList from "@/assets/images/svg";
type Props = { productImageList: string[] };

const ImageCarousel = ({ productImageList }: Props) => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const subCurrentInd = (num: number) => {
    if (currentIndex == 0 && num === -1) {
      return setCurrentIndex(productImageList?.length - 1);
    }
    if (currentIndex == productImageList?.length - 1 && num === 1) {
      return setCurrentIndex(0);
    }
    setCurrentIndex((curr) => curr + num);
  };
  return (
    <div className="flex gap-3 items-start">
      <div className="overflow-y-auto space-y-3">
        {productImageList.map((product: string, ind: number) => (
          <Image
            key={product}
            src={product}
            alt="proudct"
            width={70}
            height={70}
            onMouseEnter={() => setCurrentIndex(ind)}
            onMouseLeave={() => setCurrentIndex(0)}
            className={`object-contain rounded hover:cursor-pointer ${
              ind === currentIndex ? "border border-blue-200" : ""
            } `}
            priority
          />
        ))}
      </div>
      <div className="relative ">
        <Image
          src={productImageList[currentIndex]}
          priority
          alt="Main Product"
          className="rounded object-fill"
          width={400}
          height={380}
        />
        <div className="absolute bottom-0 w-full flex justify-between text-black px-2">
          <button
            onClick={() => subCurrentInd(-1)}
            className="grid place-items-center w-10 h-10 rounded-full shadow-md bg-white  "
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
          <button
            onClick={() => subCurrentInd(1)}
            className="grid place-items-center w-10 h-10 rounded-full shadow-md z-10 bg-white "
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
      </div>
    </div>
  );
};

export default ImageCarousel;
