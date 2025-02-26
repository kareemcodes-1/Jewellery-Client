import Gallery from "../components/products/gallery";
import ProductInfo from "../components/products/product-info";
// import RelatedProductsSwiper from "../../../../components/related-products/RelatedProductsSwiper";
import Layout from "../layout";
import { useEffect, useState } from "react";
import { Product } from "../types/types";
import { useParams } from "react-router";
import { useStore } from "../store/store";
import RelatedProducts from "@/components/related-products";
import Lenis from "lenis";
import 'lenis/dist/lenis.css'

const ProductDetails = () => {
   const [productDetails, setProductDetails] = useState<Product | null>(null);
   const [loading, setLoading] = useState<boolean>(false);

   const {id} = useParams();
   const { setProducts} = useStore();

   
  useEffect(() => {
    const lenis = new Lenis({
      autoRaf: true,
    });
    
    // Listen for the scroll event and log the event data
    lenis.on('scroll', () => {
    });
  }, []);

  useEffect(() => {
    const fetchData = async () => {
        try {
            setLoading(true); // Set loading to true before starting fetch
            const res = await fetch(`${import.meta.env.VITE_SERVER_URL}/api/products/product/${id}`);
            const data = await res.json();
            setProductDetails(data);

            // Fetching additional products
            const resProducts = await fetch(`${import.meta.env.VITE_SERVER_URL}/api/products`);
            const dataProducts = await resProducts.json();
            setProducts(dataProducts);

        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false); // Set loading to false after data is fetched
        }
    };

    fetchData();
}, [id, setProducts]); 


  return (
    <Layout>
      <div className="product-info lg:mt-[5rem] mt-[5rem] mb-[3rem]">
        <div className="product-info-container container-1 order-1 flex lg:items-center items-start lg:flex-row flex-col-reverse lg:justify-center justify-start lg:gap-[5rem] gap-[2rem]">
            {productDetails && <ProductInfo productInfo={productDetails} loading={loading}/>}
            {productDetails && <Gallery productMedia={productDetails.images} productInfo={productDetails} loading={loading}/>}
        </div>
      </div>


        
        <RelatedProducts />
    </Layout>
  );
};


export default ProductDetails;
