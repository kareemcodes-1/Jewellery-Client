import { useState } from "react";
import { Product } from "../../types/types";

const Gallery = ({
  productMedia,
  productInfo,
}: {
  productMedia: string[];
  productInfo: Product;
}) => {
  const [mainImage, setMainImage] = useState(productMedia[0]);

  return (
    <div className="lg:w-[50%] w-full flex flex-col gap-[3rem] relative">
      {/* Main image */}
      <img
        src={mainImage}
        alt={productInfo?.name || "product"}
        className="h-[30rem] border shadow-sm object-cover lg:mx-0 mx-auto"
      />

      {/* Additional images */}
      <div className="flex flex-col gap-[3rem]">
        {productMedia.map((image, index) => (
          <img
            key={`full-${index}`}
            src={image}
            alt={productInfo?.name || "product"}
            className="h-[25rem] object-cover border shadow-sm cursor-pointer"
            onClick={() => setMainImage(image)}
          />
        ))}
      </div>
    </div>
  );
};

export default Gallery;
