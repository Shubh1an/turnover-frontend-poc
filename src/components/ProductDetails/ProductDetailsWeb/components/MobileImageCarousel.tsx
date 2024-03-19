"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { useSwipeable } from "react-swipeable";
import ReactSwipe from 'react-swipe';
type Props = { productImageList: string[] };
const MobileImageCarousel = ({ productImageList }: Props) => {
   const[currentIndex,setCurrenIndex]= useState<number>(0)
  let reactSwipeEl;




  return (
    <div className="md:hidden w-[90%] mx-auto">
      <div>
        
        <ReactSwipe
        className="carousel"
        swipeOptions={{ 
          startSlide: currentIndex < productImageList.length && currentIndex >= 0 ? currentIndex : 0,
          continuous: true, callback(index, elem) {
          
          setCurrenIndex(index)
        },}}
        ref={el => (reactSwipeEl = el)}
        
      >
        {productImageList.map((image: string, ind: number) => (
                <div className="w-full h-full grid place-items-center">
                  <Image
                    key={image}
                    src={image}
                    priority
                    alt="Main Product"
                    className="rounded object-fill carousel-item"
                    width={300}
                    height={280}
                  />
                </div>
              ))}
        
      </ReactSwipe>
      <div className="flex gap-2">
        {productImageList.map((image: string, ind: number) => (
                  <div className={`p-0.5 flex-1 mt-2  ${currentIndex===ind?"bg-black":"bg-gray-300"}`}>
        
                  </div>
                ))}
      </div>
      </div>
    </div>
  );
};

export default MobileImageCarousel;
