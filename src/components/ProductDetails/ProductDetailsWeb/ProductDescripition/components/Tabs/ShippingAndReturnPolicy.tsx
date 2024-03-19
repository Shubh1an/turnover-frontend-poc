import React from "react";
import { IProductDetials } from "../../../Models/interfaces/productInterface";

type Props = {
  productDetials: IProductDetials;
};

function ShippingAndReturnPolicy({ productDetials }: Props) {
  return (
    <div className="flex flex-col md:flex-row text-sm">
      <div className="w-full md:w-1/2 mb-10 md:mb-0 text-black">
        <p className="font-medium">Return Exceptions:</p>
        <ul className="list-disc ml-6 mt-1 text-xs space-y-1">
          {productDetials?.productDetails?.shippingPolicy.map(
            (data: string) => (
              <li className="" key={data}>
                {data}
              </li>
            )
          )}
        </ul>
      </div>
      <div className="w-full md:w-1/2 text-black">
        <p className="font-medium">Unable to Find the Receipt?</p>
        <ul className="list-disc ml-6 mt-1 text-xs space-y-1">
          {productDetials?.productDetails?.returnPolicy.map((data: string) => (
            <li className="" key={data}>
              {data}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default ShippingAndReturnPolicy;
