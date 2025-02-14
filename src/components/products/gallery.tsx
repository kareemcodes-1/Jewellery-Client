
import { useState } from "react";
import { Product } from "../../types/types";

const Gallery = ({
  productMedia,
}: {
  productMedia: string[];
  productInfo: Product;
}) => {
  const [mainImage, setMainImage] = useState(productMedia[0]);

  return (
    <div className="lg:w-[50%] w-full flex flex-col gap-3 relative">

      <img
        src={mainImage}
        alt="product"
        className=" h-[30rem] shadow-xl object-cover lg:block flex items-center justify-center lg:mx-0 mx-auto"
      />
      <div className="flex gap-2 overflow-auto tailwind-scrollbar-hide">
        {productMedia.map((image, index) => (
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
