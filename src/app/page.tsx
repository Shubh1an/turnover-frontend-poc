import ProductDetailsContainer from "@/components/ProductDetails";

import TextSlider from "@/components/TextSlider/TextSlider";

export default async function Home() {
  return (
    <div className="bg-gray-100">
      <TextSlider />
      <div className=" mx-auto bg-white">
        <ProductDetailsContainer />
      </div>
    </div>
  );
}
