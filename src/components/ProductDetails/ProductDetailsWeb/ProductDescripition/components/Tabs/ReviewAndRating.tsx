import React from "react";
import { IProductDetials } from "../../../Models/interfaces/productInterface";
import Image from "next/image";
import IconList from "@/assets/images/svg";
type Props = {
  productDetials: IProductDetials;
};

const ReviewAndRating = ({ productDetials }: Props) => {
  return (
    <div className="flex flex-col md:flex-row text-sm">
      <div className="w-full md:w-1/2 text-black">
        <p className="font-medium flex items-center gap-2">
          OverAll Rating:{" "}
          <Image
            src={IconList?.RatingRed}
            priority
            alt="offer"
            className=" "
            width={96}
            height={16}
          />
        </p>
        {productDetials?.productDetails?.["reviews&ratings"].map((data) => (
          <div className="mb-3" key={data?.reviewedName}>
            <div className="py-1 text-sm my-2 flex items-center gap-2">
              <p className="text-black font-medium">{data?.title}</p>
              <p className="text-gray-900 uppercase w-fit p-1 bg-gray-100">
                Verified Purchase
              </p>
            </div>
            <Image
              src={IconList?.RatingBlack}
              priority
              alt="offer"
              className=" mb-2 "
              width={96}
              height={16}
            />
            <p className="text-sm">{data?.review}</p>
            <div className="flex justify-start gap-4 mt-2 text-black">
              <p className="text-gray-400">Is this helpful?</p>
              <div className="space-x-2 flex items-center">
                <Image
                  src={IconList?.ThumbsUp}
                  priority
                  alt="offer"
                  className=" "
                  width={16}
                  height={16}
                />
                <p>3</p>
              </div>
              <div className="space-x-2 flex items-center">
                <Image
                  src={IconList?.ThumbsDown}
                  priority
                  alt="offer"
                  className=""
                  width={16}
                  height={16}
                />
                <p>3</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ReviewAndRating;
