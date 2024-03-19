"use client"
import React, { useState } from 'react'
import IconList from "@/assets/images/svg"
import Image from 'next/image'
type Props = {
    header:React.ReactNode|string,
    children:React.ReactNode,
    headerClassName?:string|unknown
}

const Accordian = ({header,children,headerClassName}: Props) => {
    const [isOpen,setIsOpen]= useState(true)
  return (
    <div>
    <div onClick={()=>setIsOpen(!isOpen)} className={`flex px-0  p-3  justify-between transition-all ${headerClassName}`}>
        {React.isValidElement(header)?header:<p>{header}</p>}
    {isOpen?<Image
          src={IconList?.UpArrow}
          priority
          alt="Main Product"
          className=""
          width={24}
          height={24}
        />:<Image
          src={IconList?.UpArrow}
          priority
          alt="Main Product"
          className="rotate-180"
          width={24}
          height={24}
        />}
        </div> 
        <div className={`${isOpen?"h-auto py-3":"h-0 hidden"}`}>{children}</div> 
    </div>
  )
}

export default Accordian