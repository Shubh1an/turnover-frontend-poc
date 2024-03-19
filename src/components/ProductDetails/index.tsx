import React, { FC } from "react";
import { IProductDetials, IProductListData } from "./ProductDetailsWeb/Models/interfaces/productInterface";
import ProductDetailsWeb from "./ProductDetailsWeb/ProductDetails";
import ProductDetalMobile from "./ProductDetailsMobile/ProductDetalMobile";
import { promises as fs } from "fs";
import ProductSlider from "./ProductDetailsWeb/components/ProductSlider";

const ProductDetailsContainer = async () => {
  const file = await fs.readFile(
    process.cwd() + "/src/assets/json/data.json",
    "utf8"
  );
const productData= await fs.readFile(process.cwd()+"/src/assets/json/product.json","utf-8")
  const data: IProductDetials = JSON.parse(file);
  const ProductArr: IProductListData = JSON.parse(productData);
  return (
    <div className="  mx-auto py-10">
      <div className="hidden md:block w-[90%] mx-auto">
        <ProductDetailsWeb productDetials={data} />
      </div>
      <div className="md:hidden block">
        <ProductDetalMobile productDetials={data} />
      </div>
      
      <ProductSlider heading="Explore more products from Doritos" subheading="Get $5 off on $50 worth sales" ProductArr={ProductArr} />
      
      <div className="my-10">
      <ProductSlider heading="Similar Products"  ProductArr={ProductArr} />
      </div>
    </div>
  );
};

export default ProductDetailsContainer;
