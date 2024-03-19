import React from "react";
import { IProductDetials } from "../Models/interfaces/productInterface";
import TopDescripition from "./components/TopDescripition";
import TabbedLayout from "@/components/TabbedLayout/TabbedLayout";
type Props = {
  productDetials: IProductDetials;
};

function ProductDescripition({ productDetials }: Props) {
  return (
    <div>
      <TopDescripition productDetials={productDetials} />
    </div>
  );
}

export default ProductDescripition;
