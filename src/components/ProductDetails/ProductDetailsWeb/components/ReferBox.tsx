import React from "react";
import IconTextBox from "./CouponBox";
import IconList from "@/assets/images/svg";
type Props = {
  className: string;
};

const ReferBox = ({ className }: Props) => {
  return (
    <div className={`text-gray-950 max-w-xl ${className}`}>
      <IconTextBox
        className=""
        titleText={
          <p className="text-black  font-bold text-base md:text-lg flex gap-0.5">
            Refer and Earn
          </p>
        }
        icon={IconList?.Refer}
        iconWidth={32}
        iconHeight={32}
      >
        <p>Get 1% of your {"friend's"} purchase amount in your wallet</p>
      </IconTextBox>
    </div>
  );
};

export default ReferBox;
