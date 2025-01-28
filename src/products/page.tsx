import Gallery from "../components/products/gallery";
import ProductInfo from "../components/products/product-info";
// import RelatedProductsSwiper from "../../../../components/related-products/RelatedProductsSwiper";
import Layout from "../layout";
import { useEffect, useState } from "react";
import { Product } from "../types/types";
import { useParams } from "react-router";
import { useStore } from "../store/store";
import RelatedProducts from "@/components/related-products";

const ProductDetails = () => {
   const [productDetails, setProductDetails] = useState<Product | null>(null);

   const {id} = useParams();
   const { setProducts} = useStore();

    useEffect(() => {
        (async function (){
         try {
             const res = await fetch(`${import.meta.env.VITE_SERVER_URL}/api/products/product/${id}`);
             const data = await res.json();
             setProductDetails(data);
         } catch (error) {
             console.log(error);
         }

         try {
          const res = await fetch(`${import.meta.env.VITE_SERVER_URL}/api/products`);
          const data = await res.json();
          setProducts(data);
         } catch (error) {
          console.log(error);
          }
        })()
    }, []);

  return (
    <Layout>
      <div className="product-info lg:mt-[5rem] mt-[5rem] mb-[3rem]">
        <div className="product-info-container container-1 order-1 flex lg:items-center items-start lg:flex-row flex-col-reverse lg:justify-center justify-start lg:gap-[5rem] gap-[2rem]">
            {productDetails && <ProductInfo productInfo={productDetails} />}
            {productDetails && <Gallery productMedia={productDetails.images} productInfo={productDetails} />}
        </div>
      </div>


        
        <RelatedProducts />
    </Layout>
  );
};


export default ProductDetails;
