"use client";

import React, { useState } from "react";

const TextSlider = () => {
  const [textArr] = useState<string[]>([
    "Get 10% off on business sign up",
    "Get 20% off on business sign up",
    "Get 30% off on business sign up",
    "Get 40% off on business sign up",
  ]);
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const subCurrentInd = (num: number) => {
    if (currentIndex == 0 && num === -1) {
      return setCurrentIndex(textArr?.length - 1);
    }
    if (currentIndex == textArr?.length - 1 && num === 1) {
      return setCurrentIndex(0);
    }
    setCurrentIndex((curr) => curr + num);
  };
  console.log({ currentIndex });
  return (
    <div>
      <div className="flex justify-center items-center gap-3 text-black font-medium text-sm py-2">
        <button onClick={() => subCurrentInd(-1)}>{"<"}</button>
        <div className="overflow-hidden w-[16rem]">
          <div
            className={`flex justify-center text-nowrap items-center text-center`}
          >
            {textArr.map(
              (text: string, ind: number) =>
                ind === currentIndex && <p key={text}>{text}</p>
            )}
          </div>
        </div>
        <button onClick={() => subCurrentInd(1)}>{">"}</button>
      </div>
    </div>
  );
};

export default TextSlider;
