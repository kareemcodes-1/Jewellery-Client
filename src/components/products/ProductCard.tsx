// import { useState } from "react";
import { useState } from "react";
import { useStore } from "../../store/store";
import { CartItem, Product } from "../../types/types";
import toast from "react-hot-toast";
import Loading from "../loading";
import FadeContent from "@/utils/fade-content";

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  const { addToCart, cart, setOpenCartModal } = useStore();
  const [loading, setLoading] = useState<boolean>(false);


  const handleAddToCart = () => {
    setLoading(true);
    const existingProductInCart = cart.find(
      (item) => item.product._id === product?._id
    );
    if (product) {
      if (!existingProductInCart) {
        const data: CartItem = {
          product: {
            ...product,
            // sizes: selectedSizes,
          },
          quantity: 1,
        };
        setTimeout(() => {
          setLoading(false);
          addToCart(data);
          toast.success("Added to cart");
          setOpenCartModal(true);
        }, 1500);
      } else {
        setLoading(false);
        toast.error("Item already in cart");
      }
    }
  };
  return (
    <>
        <FadeContent blur={true} duration={1000} easing="ease-out" initialOpacity={0}>
        <div className=" flex flex-col items-center justify-center mx-auto   swiper-product-sm">
        <a href={`/products/${product._id}`} className="xs:w-full w-[320px] h-[400px] gap-2 text-center relative">
          <img
            src={product.images[0]}
            alt={product.name}
            className="h-[340px] w-full rounded-lg object-cover mb-[.5rem]"
          />

          <div>
            <p className="text-[1rem] tracking-[.2rem] font-semibold manrope uppercase">
              {product.name}
            </p>
            <p className="font-bold text-[1rem] manrope">${product.price}</p>
          </div>
        </a>
        {product?.inStock ? (
          <div className="">
            <button
              onClick={handleAddToCart}
              type="button"
              className="bg-black mt-[.5rem] w-[15rem] p-[.8rem] tracking-[.4rem] text-[.8rem] font-bold text-white  text-center flex items-center justify-center hover:opacity-80 transition-opacity"
            >
              {loading ? 'Loading...' : 'ADD TO CART'}
            </button>
          </div>
        ) : (
          <div
            className="bg-black mt-[.5rem] w-[15rem] p-[.8rem] tracking-[.4rem] text-[.8rem] font-bold text-white  text-center flex items-center justify-center opacity-80"
            aria-disabled
          >
            ADD TO CART
          </div>
        )}
        </div>
        </FadeContent>

      <FadeContent blur={true} duration={1000} easing="ease-out" initialOpacity={0}>
      <div className=" flex flex-col gap-2 text-center items-center justify-center relative swiper-product-lg">
        <a href={`/products/${product._id}`} className="w-full h-[400px]">
          <img
            src={product.images[0]}
            alt={product.name}
            className="h-[350px] w-[400px] object-cover mb-[.5rem] self-center flex items-center mx-auto justify-center"
          />

          <div className="mt-[.5rem] flex items-center flex-col">
            <h2 className="text-[1rem] tracking-[.2rem] font-semibold manrope uppercase">
              {product.name}
            </h2>
            {/* <p className="font-normal text-[1rem] text-grey-2">
              {product.collectionId.name}
            </p> */}
            <p className="font-bold text-[1rem] manrope">${product.price}</p>
          </div>
        </a>
        {product?.inStock ? (
          <div className="">
            <button
              type="button"
              onClick={handleAddToCart}
              className="bg-black mt-[.5rem] w-[15rem] p-[.8rem] tracking-[.4rem] text-[.8rem] font-bold text-white  text-center items-center justify-center hover:opacity-80 transition-opacity"
            >
                 {loading ? <Loading /> : 'ADD TO CART'}
            </button>
          </div>
        ) : (
          <div
            className="bg-black mt-[.5rem] w-[15rem] p-[.8rem] tracking-[.4rem] text-[.8rem] font-bold text-white  text-center flex items-center justify-center opacity-80"
            aria-disabled
          >
            ADD TO CART
          </div>
        )}
      </div>
      </FadeContent>
    </>
  );
};

export default ProductCard;
