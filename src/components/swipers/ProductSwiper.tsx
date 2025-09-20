import { Swiper, SwiperSlide } from "swiper/react";
//@ts-ignore
import "swiper/css";
//@ts-ignore
import "swiper/css/navigation";
import { Navigation, Autoplay } from "swiper/modules";
import ProductCard from "../products/ProductCard";
import { Product } from "../../types/types";

const ProductSwiper = ({ products }: { products: Product[] }) => {
  return (
    <>
      {/* Large screen swiper */}
      <Swiper
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        slidesPerView={3}
        loop={true}
        navigation={true}
        modules={[Navigation, Autoplay]}
        className="mySwiper swiper-product-lg"
      >
        {products.map((product: Product, idx) => (
          <SwiperSlide key={product?._id || idx}>
            <ProductCard product={product} />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Small screen swiper */}
      <Swiper
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        slidesPerView={1}
        loop={true}
        navigation={true}
        modules={[Navigation, Autoplay]}
        className="mySwiper swiper-product-sm"
      >
        {products.map((product: Product, idx) => (
          <SwiperSlide key={product?._id || idx}>
            <ProductCard product={product} />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default ProductSwiper;
