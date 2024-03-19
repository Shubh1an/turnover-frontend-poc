import React from 'react'

type Props = {
    brand:string,
    prodectName:string,
    upc:string
}

const ProductTitleBox = ({brand,prodectName,upc}: Props) => {
  return (
    <div className="grid md:grid-cols-1 grid-cols-2 justify-between items-start">
        
          <p className="text-slate-400 md:col-span-1  text-sm">
            {brand.toUpperCase()}
          </p>
          <p className="text-black font-semibold text-base md:text-xl col-span-2 md:col-span-1 my-1.5">
            {prodectName}
          </p>
        
        <p className="text-slate-400 space-x-2 text-xs text-nowrap  col-start-2  md:col-start-1 md:row-start-3 row-start-1 text-end md:text-start  md:col-span-1 md:text-sm my-1.5">
          {upc}
        </p>
      </div>
  )
}

export default ProductTitleBox