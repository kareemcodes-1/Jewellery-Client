import { useEffect } from "react";
import { useStore } from "../../store/store";
import ProductSwiper from "../swipers/ProductSwiper";
import SplitText from "@/utils/split-text";

const TrendingProducts = () => {
  const { products, setProducts } = useStore();

  useEffect(() => {
    fetch(`${import.meta.env.VITE_SERVER_URL}/api/products`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((err) => console.log(err));
  }, [setProducts]);

  return (
    <div className="mt-[5rem] lg:mx-[1.5rem]">
      <SplitText
        text="Trending Products"
        delay={50}
        animationFrom={{ opacity: 0, transform: "translate3d(0,50px,0)" }}
        animationTo={{ opacity: 1, transform: "translate3d(0,0,0)" }}
        threshold={0.2}
        rootMargin="-50px"
        className="lg:text-[5rem] text-[2rem] mb-[1rem] font-medium lg:text-start text-center ginger flex lg:items-start items-center lg:justify-start justify-center uppercase"
      />

      {products && products.length > 0 && (
        <ProductSwiper products={products} />
      )}
    </div>
  );
};

export default TrendingProducts;
