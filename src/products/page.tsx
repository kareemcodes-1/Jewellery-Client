import Gallery from "../components/products/gallery";
import ProductInfo from "../components/products/product-info";
import Layout from "../layout";
import { useEffect, useState } from "react";
import { Product } from "../types/types";
import { useParams } from "react-router";
import { useStore } from "../store/store";
import RelatedProducts from "@/components/related-products";
import Lenis from "lenis";
import "lenis/dist/lenis.css";
import Loading from "../loading"; // import your loader

const ProductDetails = () => {
  const [productDetails, setProductDetails] = useState<Product | null>(null);
  const [loading, setLoading] = useState<boolean>(true); // fetch loading
  const [showLoader, setShowLoader] = useState<boolean>(true); // UI loader

  const { id } = useParams();
  const { setProducts } = useStore();

  useEffect(() => {
    const lenis = new Lenis({ autoRaf: true });
    lenis.on("scroll", () => {});
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const res = await fetch(
          `${import.meta.env.VITE_SERVER_URL}/api/products/product/${id}`
        );
        const data = await res.json();
        setProductDetails(data);

        // Fetch additional products
        const resProducts = await fetch(
          `${import.meta.env.VITE_SERVER_URL}/api/products`
        );
        const dataProducts = await resProducts.json();
        setProducts(dataProducts);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [id, setProducts]);

  useEffect(() => {
    let timer: NodeJS.Timeout;

    if (loading) {
      setShowLoader(true);
    } else {
      timer = setTimeout(() => {
        setShowLoader(false);
      }, 3000); 
    }

    return () => clearTimeout(timer);
  }, [loading]);

  if (showLoader) {
    return <Loading />;
  }

  return (
    <Layout>
      <div className="product-info lg:mt-[5rem] mt-[5rem] mb-[3rem]">
        <div className="product-info-container container-1 order-1 flex items-start lg:flex-row flex-col-reverse lg:justify-center justify-start lg:gap-[5rem] gap-[2rem]">
          {productDetails && <ProductInfo productInfo={productDetails} />}
          {productDetails && (
            <Gallery
              productMedia={productDetails.images}
              productInfo={productDetails}
            />
          )}
        </div>
      </div>
      <RelatedProducts />
    </Layout>
  );
};

export default ProductDetails;
