import React from 'react'

type Props = {
    offerPrice:string[],
    price:number,
    offer:number,
    MSRP:number,
    cardView?:boolean
}

const PriceCard = ({price,offer,MSRP,offerPrice,cardView}: Props) => {
  return (
    <div className={`${cardView?"gap-0.5":"gap-2 mb-8"} flex `}>
         <p className={`text-red-500 space-x-0.5 font-bold ${cardView?"text-center":"text-start"} w-fit  flex justify-start items-start `}>
          <span  className={`${cardView?"text-lg":"md:text-4xl text-2xl"} font-extrabold`}>${offerPrice[0]}</span>
          <span  className={`${cardView?"text-xs":"md:text-xl text-sm"} pt-1 font-extrabold`}>{offerPrice[1]}</span>
        </p>
        <div className={`${cardView?"flex w-full text-xs justify-start gap-2 mt-1":"md:block md:w-fit w-full flex justify-between "}  `}>
        <p className="text-slate-400 tex-base space-x-2">
          <span className={`line-through ${cardView?" text-xs":"text-sm "}`}>
            ${price.toFixed(2)}
          </span>
          <span className="mt-2">
            <span className={`text-green-500 bg-green-100 font-medium  ${cardView?" text-xs":"text-sm "} `}>
              {offer}% Off
            </span>
          </span>
        </p>
        <p className="text-slate-500 ">
          MSRP:<span className="ml-1 text-xs md:text-sm">${MSRP}</span>
        </p>
          </div>
    </div>
  )
}

export default PriceCard