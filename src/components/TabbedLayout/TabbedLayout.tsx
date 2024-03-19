"use client";

import { FC, useState } from "react";

type ITabbedLayoutProps = {
  items: string[];
  children?: any;
};
const TabbedLayout: FC<ITabbedLayoutProps> = ({ items, children }) => {
  if (!Array.isArray(children)) {
    children = [children];
  }
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const setView = (index: number) => setActiveIndex(index);
  const ShowTitleAndSubTitle = ({ titleArr }: { titleArr: string[] }) => {
    return (
      <div className=" w-full rounded flex mt-2 gap-6 p-2 py-1 border-b border-b-1">
        {titleArr.map((el, index) => {
          return (
            <div key={el}>
              <button
                key={el}
                className={`text-base  font-medium uppercase ${
                  index === activeIndex ? "text-black" : "text-gray-300"
                }`}
                onClick={() => {
                  setView(index);
                }}
              >
                {el}
              </button>
              {index === activeIndex && (
                <div className="rounded-t-lg p-0.5 translate-y-2 bg-black mt-2"></div>
              )}
            </div>
          );
        })}
      </div>
    );
  };

  return (
    <>
      <div className={`flex w-full`}>
        <ShowTitleAndSubTitle titleArr={items} />
      </div>
      {children?.map((el: React.ReactNode, index: number) => {
        return (
          <>
            {activeIndex === index && (
              <div>
                <div className="p-4 bg-white ">{el}</div>
              </div>
            )}
          </>
        );
      })}
    </>
  );
};

export default TabbedLayout;
