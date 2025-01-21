// import ProductSwiper from "../components/swiper/ProductsSwiper";

import { useEffect } from "react";
import { useStore } from "../../store/store";
import ProductSwiper from "../swipers/ProductSwiper";

const NewestProducts = () => {
  const {products, setProducts} = useStore();
  useEffect(() => {
       fetch(`${import.meta.env.VITE_SERVER_URL}/api/products`, {
        method: "GET",
        headers: {
          'Content-Type': 'application/json',
        },
        credentials: "include",
       }).then((res) => res.json())
       .then((data) => setProducts(data))
       .catch((err) => console.log(err));
    }, [])
//   const products = await getProducts();
   
    

  return (
    <div className="mt-[2rem] mx-[1.5rem]">
      <h2 className="lg:text-[5rem] text-[3rem] mb-[1rem] font-medium">Newest Products</h2>
      {!products || products.length === 0 ? (
        <p className="text-body-bold">No products found</p>
      ) : (
        <ProductSwiper products={products} />
      )}
    </div>
  );
};

export default NewestProducts;