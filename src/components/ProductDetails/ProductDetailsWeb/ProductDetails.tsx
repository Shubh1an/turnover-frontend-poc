import React from "react";
import { IProductDetials } from "./Models/interfaces/productInterface";
import ImageCarousel from "./components/imageCarousel";
import ProductDescripition from "./ProductDescripition/ProductDescripition";
import TabbedLayout from "@/components/TabbedLayout/TabbedLayout";
import ProductDetailsTab from "./ProductDescripition/components/Tabs/ProductDetailsTab";
import ShippingAndReturnPolicy from "./ProductDescripition/components/Tabs/ShippingAndReturnPolicy";
import ReviewAndRating from "./ProductDescripition/components/Tabs/ReviewAndRating";
import MobileImageCarousel from "./components/MobileImageCarousel";
type Props = {
  productDetials: IProductDetials;
};

const ProductDetailsWeb = ({ productDetials }: Props) => {

  return (
    <div>
      <div className="flex flex-col md:flex-row mb-10">
        <div className="md:w-1/2 w-full">
          <ImageCarousel
            productImageList={productDetials?.productDetails?.productImgs}
          />
        </div>
        <div className=" w-full md:w-1/2">
          <ProductDescripition productDetials={productDetials} />
        </div>
      </div>
      <div className="mt-10">
        <TabbedLayout
          items={[
            "Product Details",
            "Reviews & Ratings",
            "Shipping & Return Policy",
          ]}
        >
          <ProductDetailsTab productDetials={productDetials} />
          <ReviewAndRating productDetials={productDetials} />

          <ShippingAndReturnPolicy productDetials={productDetials} />
        </TabbedLayout>
      </div>
    </div>
  );
};

export default ProductDetailsWeb;
