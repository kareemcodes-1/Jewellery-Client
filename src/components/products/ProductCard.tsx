// import { useState } from "react";
import { useState } from "react";
import { useStore } from "../../store/store";
import { CartItem, Product } from "../../types/types";
import toast from "react-hot-toast";

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
   const {addToCart, cart, setOpenCartModal} = useStore();
   const [, setLoading] = useState<boolean>(false);

   const handleAddToCart = () => {
     setLoading(true);
     const existingProductInCart = cart.find((item) => item.product._id === product?._id)
      if(product){
          if(!existingProductInCart){
           const data: CartItem = {
               product: {
                   ...product,
                   // sizes: selectedSizes,
               },
               quantity: 1
             } 
              setTimeout(() => {
               setLoading(false);
               addToCart(data);
               toast.success('Added to cart');
               setOpenCartModal(true);
              }, 1500)
          }else{
           setLoading(false);
           toast.error('Item already in cart');
          }
      }
  }
  return (
    <>
      <div className="xs:w-full w-[300px] h-[520px] flex flex-col gap-2 text-center relative items-center justify-center mx-auto swiper-product-sm">
        <a href={`/products/${product._id}`}>
          <img
            src={product.images[0]}
            alt={product.name}
            className="h-[340px] w-[300px] rounded-lg object-cover mb-[.5rem]"
          />

          <div>
            <p className="text-[1rem] tracking-[.2rem] font-semibold manrope uppercase">{product.name}</p>
            <p className="font-bold text-[1rem] manrope">${product.price}</p>
          </div>
        </a>
        {product?.inStock ? (
          <div className="">
            <button
               onClick={handleAddToCart}
              type="button"
              className="bg-black mt-[.5rem] w-[15rem] p-[.8rem] tracking-[.4rem] text-[.8rem] font-bold text-white  text-center items-center justify-center"
            >
              ADD TO CART
            </button>
          </div>
        ) : (
          <div
            className="bg-black mt-[.5rem] h-[3rem] text-white w-[15rem] flex text-center items-center justify-center mx-auto opacity-80"
            aria-disabled
          >
            ADD TO CART
          </div>
        )}
      </div>

      <div className="w-[400px] h-[520px] flex flex-col gap-2 text-center items-center justify-center relative swiper-product-lg">
        <a href={`/products/${product._id}`}>
          <img
            src={product.images[0]}
            alt={product.name}
            className="h-[350px] w-[350px] object-cover mb-[.5rem]"
          />

          <div className="mt-[.5rem] flex items-center flex-col">
            <h2 className="text-[1rem] tracking-[.2rem] font-semibold manrope uppercase">{product.name}</h2>
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
              className="bg-black mt-[.5rem] w-[15rem] p-[.8rem] tracking-[.4rem] text-[.8rem] font-bold text-white  text-center items-center justify-center"
            >
              ADD TO CART
            </button>
          </div>
        ) : (
          <div
            className="bg-black mt-[.5rem] h-[2.7rem] w-[10rem] text-white flex text-center items-center justify-center opacity-80"
            aria-disabled
          >
            ADD TO CART
          </div>
        )}
      </div>
    </>
  );
};

export default ProductCard;
