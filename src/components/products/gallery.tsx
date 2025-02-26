
import { useState } from "react";
import { Product } from "../../types/types";
import Skeleton from "react-loading-skeleton";
import 'react-loading-skeleton/dist/skeleton.css'

const Gallery = ({
  productMedia,
  loading,
}: {
  productMedia: string[];
  productInfo: Product;
  loading: boolean
}) => {
  const [mainImage, setMainImage] = useState(productMedia[0]);
  return (
    <div className="lg:w-[50%] w-full flex flex-col gap-3 relative">

      {loading ? <Skeleton className="h-[30rem] w-full"/> : <img
        src={mainImage}
        alt="product"
        className=" h-[30rem] shadow-xl object-cover lg:block flex items-center justify-center lg:mx-0 mx-auto"
      />}
      <div className="flex gap-2 overflow-auto tailwind-scrollbar-hide">
        {loading ? <Skeleton className="w-20 h-20"/> : productMedia.map((image, index) => (
          <img
            key={index}
            src={image}
            alt="product"
            className={`w-20 h-20 object-cover cursor-pointer ${
              mainImage === image ? "border-black border" : ""
            }`}
            onClick={() => setMainImage(image)}
          />
        ))}
      </div>
    </div>
  );
};

export default Gallery;
