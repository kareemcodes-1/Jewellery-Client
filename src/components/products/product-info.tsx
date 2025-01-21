

import { useState } from "react";
// import HeartFavorite from "./HeartFavorite";
import { CartItem, Product } from "../../types/types";
import { useStore } from "../../store/store";
import formatCurrency from "../../utils/formatCurrency";
import toast from "react-hot-toast";

const ProductInfo = ({ productInfo }: { productInfo: Product }) => {
  const {addToCart, setOpenCartModal, cart} = useStore();
  const [,setLoading] = useState<boolean>(false);

  const handleAddToCart = () => {
    setLoading(true);
    const existingProductInCart = cart.find((item) => item.product._id === productInfo?._id)
     if(productInfo){
         if(!existingProductInCart){
          const data: CartItem = {
              product: {
                  ...productInfo,
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
    <div className="flex flex-col gap-4 lg:w-[50%]">
      <div className="flex justify-between items-center gap-[1rem]">
        <h2 className=" text-[1.5rem] font-semibold text-black manrope uppercase tracking-[.2rem]">{productInfo.name}</h2>
        {/* <HeartFavorite product={productInfo} /> */}
      </div>

      <div className="flex gap-2">
        {/* <p className="text-base-medium text-grey-2">Category:</p>
        <p className="text-base-bold">{productInfo.category}</p> */}
      </div>

      <p className="text-[1rem] font-bold">{formatCurrency(productInfo.price)}</p>

      <div className="flex flex-col gap-2">
        <p className="font-light text-[.9rem] tracking-[.1rem] uppercase">
          {productInfo.description}
        </p>
      </div>

      <hr />

      {/* {productInfo.colors.length > 0 && (
        <div className="flex flex-col gap-2">
          <p className="text-base-medium text-grey-2">Colors:</p>
          <div className="flex gap-2">
            {productInfo.colors.map((color, index) => (
              <p
                key={index}
                className={`border border-black px-2 py-1 rounded-lg cursor-pointer ${
                  selectedColor === color && "bg-black text-white"
                }`}
                onClick={() => setSelectedColor(color)}
              >
                {color}
              </p>
            ))}
          </div>
        </div>
      )} */}

      {/* {productInfo.sizes.length > 0 && (
        <div className="flex flex-col gap-2">
          <p className="text-base-medium text-grey-2">Sizes:</p>
          <div className="flex gap-2">
            {productInfo.sizes.map((size, index) => (
              <p
                key={index}
                className={`border border-black px-2 py-1 rounded-lg cursor-pointer ${
                  selectedSize === size && "bg-black text-white"
                }`}
                onClick={() => setSelectedSize(size)}
              >
                {size}
              </p>
            ))}
          </div>
        </div>
      )} */}

      {/* <div className="flex flex-col gap-2">
        <p className="text-base-medium text-grey-2">Quantity:</p>
        <div className="flex gap-4 items-center w-full justify-between my-[1.2rem] bg-[#00000017] p-[1rem] h-[3rem]">
          <Minus
            className=" cursor-pointer"
            onClick={() => cartquantity > 1 && incrementQuantity(productInfo._id)}
          />
          <p className="text-body-bold">{quantity}</p>
          <Plus
            className=" cursor-pointer"
            onClick={() => setQuantity(quantity + 1)}
          />
        </div>
      </div> */}

      {productInfo?.inStock ? (
        <button
        onClick={() => handleAddToCart()}
          className="outline text-[.8rem] font-bold uppercase tracking-[.4rem] py-3 rounded-lg bg-black text-white"
        >
          Add To Basket
        </button>
      ) : (
        <button
          className="cursor-not-allowed outline font-bold uppercase py-3 rounded-lg bg-black text-white opacity-[.8]"
          aria-disabled
        >
          Add To Basket
        </button>
      )}
    </div>
  );
};

export default ProductInfo;
