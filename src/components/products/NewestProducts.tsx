// import ProductSwiper from "../components/swiper/ProductsSwiper";

import { useEffect, useState } from "react";
import { useStore } from "../../store/store";
import ProductSwiper from "../swipers/ProductSwiper";
import SplitText from "@/utils/split-text";

const NewestProducts = () => {
  const {products, setProducts} = useStore();
   const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
       fetch(`${import.meta.env.VITE_SERVER_URL}/api/products`, {
        method: "GET",
        headers: {
          'Content-Type': 'application/json',
        }
       }).then((res) => res.json())
       .then((data) => setProducts(data))
       .catch((err) => console.log(err)).finally(() => setLoading(false));
    }, [])
//   const products = await getProducts();
   
    

  return (
    <div className="mt-[2rem] lg:mx-[1.5rem]">
      {/* <h2 className="lg:text-[5rem] text-[3rem] mb-[1rem] font-medium lg:text-start text-center">Newest Products</h2> */}
      <SplitText
                text="Newest Products"
                delay={50}
                animationFrom={{ opacity: 0, transform: 'translate3d(0,50px,0)' }}
                animationTo={{ opacity: 1, transform: 'translate3d(0,0,0)' }}
                // easing="easeOutCubic"
                threshold={0.2}
                rootMargin="-50px" className="lg:text-[5rem] text-[2.5rem] mb-[1rem] font-medium lg:text-start text-center flex lg:items-start items-center lg:justify-start justify-center ginger" />

        <ProductSwiper products={products} loading={loading}/>
    </div>
  );
};

export default NewestProducts;