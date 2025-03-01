import { Swiper, SwiperSlide } from "swiper/react";
//@ts-ignore
import "swiper/css";
//@ts-ignore
import "swiper/css/navigation";
import { Navigation, Autoplay } from "swiper/modules";
import ProductCard from "../products/ProductCard";
import { Product } from "../../types/types";
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
// import ProductCard from "../ProductCard";

const ProductSwiper = ({ products, loading }: { products: Product[], loading: boolean }) => {
  return (
    <>
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
        {products.map((product: Product) => (
          <SwiperSlide key={product._id}>
            {loading ? <Skeleton className="h-[350px] w-[400px]"/> : <ProductCard product={product} />}
          </SwiperSlide>
        ))}
      </Swiper>

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
        {products.map((product: Product) => (
          <SwiperSlide key={product._id}>
            <ProductCard product={product} />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default ProductSwiper;
