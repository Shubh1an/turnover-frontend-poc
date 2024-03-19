import React from "react";
import IconList from "@/assets/images/svg";
import Image from "next/image";
type Props = {
  quantity: number;
};

const AddToCartBox = ({ quantity }: Props) => {
  return (
    <div className="w-full flex gap-2">
      <div className="flex justify-between border rounded-lg p-2 items-center gap-2 w-[20%] text-black">
        <span className="text-xs md:text-sm">-</span>
        <span className="text-sm md:text-base">{quantity}</span>
        <span className="texts-xs md:text-sm">+</span>
      </div>
      <button className="w-full flex justify-center items-center gap-2 bg-black rounded-lg p-2 text-white">
        <Image
          src={IconList?.CartIcon}
          priority
          alt="offer"
          className=" text-white"
          width={12}
          height={12}
        />
        <span>ADD TO CART</span>
      </button>
    </div>
  );
};

export default AddToCartBox;
