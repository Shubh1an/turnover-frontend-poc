import React from "react";
import { IProductDetials } from "../../../Models/interfaces/productInterface";

type Props = {
  productDetials: IProductDetials;
};

const ProductDetailsTab = ({ productDetials }: Props) => {
  return (
    <div className="flex flex-col md:flex-row text-sm">
      <div className="w-full md:w-1/2">
        <div className="grid grid-cols-2 text-black text-sm items-center space-y-2 md:w-[35%] mb-10 md:mb-0 w-full">
          <p className=" text-gray-300">Brand:</p>
          <p className="font-medium text-sm">
            {productDetials?.productDetails.brand}
          </p>
          <p className=" text-gray-300">Flavour:</p>
          <p className="font-medium text-sm">
            {productDetials?.productDetails.flavour}
          </p>
          <p className=" text-gray-300">Unit Count:</p>
          <p className="font-medium text-sm">
            {productDetials?.productDetails.unitCount}
          </p>
          <p className=" text-gray-300">Type:</p>
          <p className="font-medium text-sm">
            {productDetials?.productDetails.type}
          </p>
          <p className=" text-gray-300">Manfacture Code:</p>
          <p className="font-medium text-sm">
            {productDetials?.productDetails.manufactureCode}
          </p>
        </div>
      </div>
      <div className="w-full md:w-1/2 text-black">
        <p className="font-medium">Description</p>
        <ul className="list-disc ml-6 mt-1 text-xs space-y-1">
          {productDetials?.productDetails?.description.map((data: string) => (
            <li className="" key={data}>
              {data}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ProductDetailsTab;
