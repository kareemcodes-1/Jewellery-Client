import { useStore } from '@/store/store';
import { useEffect, useState } from 'react';
import ProductCard from './products/ProductCard';
import Skeleton from "react-loading-skeleton";
import 'react-loading-skeleton/dist/skeleton.css';

const RelatedProducts = () => {
  const { products, setProducts } = useStore();
  const [loading, setLoading] = useState<boolean>(true); // Set loading to true initially
  
  useEffect(() => {
    (async function () {
      try {
        const res = await fetch(`${import.meta.env.VITE_SERVER_URL}/api/products`);
        const data = await res.json();
        setProducts(data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    })();
  }, [setProducts]);

  const relatedProducts = products.slice(5, 9); 

  return (
    <div className="flex flex-col mb-[2rem] px-[2rem]">
      <h2 className="lg:text-[5rem] text-[2.5rem] font-medium mb-[1rem] lg:text-start text-center">
        Related Products
      </h2>
      <div className="grid grid-cols-3 w-full  lg:gap-[1rem] gap-[2rem]">
        {loading
          ? 
            [1, 2, 3, 4].map((_, index) => (
              <Skeleton key={index} className="h-[350px] lg:!w-[350px] !w-[320px]" />
            ))
          : 
            relatedProducts.map((product, index) => (
              <ProductCard product={product} key={index}/>
            ))}
      </div>
    </div>
  );
};

export default RelatedProducts;
