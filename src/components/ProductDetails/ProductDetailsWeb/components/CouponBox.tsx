import Image from "next/image";
import React from "react";

type Props = {
  children?: React.ReactNode;
  titleText: string | React.ReactNode;
  className?: string;
  icon: string;
  iconPosition?:"start"|"center"|"end";
  iconWidth?: number;
  iconHeight?: number;
};

const IconTextBox = ({
  children,
  titleText,
  className,
  icon,
  iconPosition="center",
  iconWidth = 22,
  iconHeight = 22,
}: Props) => {
  return (
    <div className={`flex ${iconPosition==="start"?"items-start":"items-center"} gap-2 ${className}`}>
      <Image
        src={icon}
        priority
        alt="offer"
        className=" "
        width={iconWidth}
        height={iconHeight}
      />
      <div>
        {titleText}
        {children}
      </div>
    </div>
  );
};

export default IconTextBox;
