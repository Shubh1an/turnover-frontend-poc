import Image from "next/image";
import React from "react";
import IconList from "@/assets/images/svg";

interface flavour {
  title: string;
  isAvailable: boolean;
}
type Props = {
  flavourList: flavour[];
  productFlavour?: string;
};

const FlavourBox = ({ flavourList, productFlavour }: Props) => {
  return (
    <div className="grid md:grid-cols-4 grid-cols-3  gap-3 md:w-fit">
      {flavourList.map((flav: flavour) => (
        <div
          className={`border relative rounded-xl px-5 max-w-36 h-10 grid place-items-center place-content-center md:text-sm text-[2vw] hover:cursor-pointer ${
            productFlavour === flav?.title
              ? "bg-black text-white"
              : "text-gray-900"
          } ${!flav?.isAvailable ? "bg-gray-200" : ""}`}
          key={flav?.title}
        >
          {!flav?.isAvailable && (
            <div>
              <Image
                src={IconList?.Bell}
                priority
                alt="offer"
                className="absolute top-0 left-0 z-1 mt-1 ml-1"
                width={12}
                height={12}
              />
            </div>
          )}
          <p className="">{flav?.title}</p>
        </div>
      ))}
    </div>
  );
};

export default FlavourBox;
