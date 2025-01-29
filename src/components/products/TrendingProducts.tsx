
import { useEffect } from "react";
import { useStore } from "../../store/store";
import ProductSwiper from '../swipers/ProductSwiper'

const TrendingProducts = () => {

    const {products, setProducts} = useStore();
    useEffect(() => {
         fetch(`${import.meta.env.VITE_SERVER_URL}/api/products`, {
          method: "GET",
          headers: {
            'Content-Type': 'application/json',
          }
         }).then((res) => res.json())
         .then((data) => setProducts(data))
         .catch((err) => console.log(err));
      }, [])

  return (
    <div className="mt-[2rem] lg:mx-[1.5rem]">
      <h2 className="lg:text-[5rem] text-[2.5rem] mb-[1rem] font-medium lg:text-start text-center">Trending Products</h2>
      {!products || products.length === 0 ? (
        <p className="text-body-bold">No products found</p>
      ) : (
        <ProductSwiper products={products} />
      )}
    </div>
  )
}

export default TrendingProducts