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
  const placeholderArray = Array(3).fill(null); // number of skeleton slides you want

  return (
    <>
      <Swiper
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        slidesPerView={3}
        loop={true}
        //  spaceBetween={10}
        navigation={true}
        modules={[Navigation, Autoplay]}
        className="mySwiper swiper-product-lg"
      >
        {(loading ? placeholderArray : products).map((product: Product | null, idx) => (
          <SwiperSlide key={product?._id || idx}>
            {loading ? (
              <Skeleton className="h-[350px] !w-[400px]" style={{ borderRadius: '1rem' }}/>
            ) : (
              product && <ProductCard product={product} />
            )}
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
        {(loading ? placeholderArray : products).map((product: Product | null, idx) => (
          <SwiperSlide key={product?._id || idx}>
            {loading ? (
              <Skeleton className="h-[350px] w-[400px]" />
            ) : (
              product && <ProductCard product={product} />
            )}
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};


export default ProductSwiper;
