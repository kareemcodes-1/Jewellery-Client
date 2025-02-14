

import { useState } from "react";
// import HeartFavorite from "./HeartFavorite";
import { CartItem, Product } from "../../types/types";
import { useStore } from "../../store/store";
import formatCurrency from "../../utils/formatCurrency";
import toast from "react-hot-toast";
import { Minus, Plus } from "lucide-react";
import { Link } from "react-router";

const ProductInfo = ({ productInfo }: { productInfo: Product }) => {
  const {addToCart, setOpenCartModal, cart} = useStore();
  const [,setLoading] = useState<boolean>(false);
  const [quantity, setQuantity] = useState<number>(1);

  function incrementQuantity (productId: string){
    if(productId === productInfo._id){
      setQuantity(quantity + 1);
    }
  };

  function decrementQuantity (productId: string){
    if(productId === productInfo._id){
    setQuantity(quantity - 1);
    }
  }

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
              quantity
            } 
             setTimeout(() => {
              setLoading(false);
              setQuantity(1);
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
    <div className="flex flex-col gap-4 lg:w-[50%] w-full">

      <div className="flex items-start gap-[1rem]">
          <Link to={'/'} className="uppercase border-r border-gray-400 pr-[.5rem] tracking-[.2rem] text-[.8rem]">Shop</Link>

          <Link to={'/'} className="uppercase border-r border-gray-400 pr-[.5rem] tracking-[.2rem] text-[.8rem]">{productInfo.name}</Link>

          <Link to={'/'} className="uppercase border-r border-gray-400 pr-[.5rem] tracking-[.2rem] text-[.8rem]">{productInfo?.collectionId?.name}</Link>
      </div>

      <div className="flex justify-between items-center gap-[1rem]">
        <h2 className="flex gap-[.5rem] text-[1.5rem] font-semibold manrope text-black uppercase tracking-[.2rem]">{productInfo.name} <span className="font-thin !text-gray-500">|</span> <p className="text-[1.5rem] font-bold">{formatCurrency(productInfo.price)}</p></h2>
        {/* <HeartFavorite product={productInfo} /> */}
      </div>


      <div className="flex flex-col gap-2">
        <p className="font-light text-[.9rem] tracking-[.1rem] uppercase">
          {productInfo.description}
        </p>
      </div>

        
      <div className="flex flex-col gap-2">
        <div className="flex gap-4 items-center w-full justify-between my-[1.2rem] bg-[#00000017] p-[1rem] h-[3rem]">
          <Minus
            className=" cursor-pointer"
            // onClick={() => cartquantity > 1 && incrementQuantity(productInfo._id)}
            onClick={() => decrementQuantity(productInfo._id)}
          />
          <p className="text-body-bold">{quantity}</p>
          <Plus
            className=" cursor-pointer"
            onClick={() => incrementQuantity(productInfo._id)}
          />
        </div>
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


      {productInfo?.inStock ? (
        <button
        onClick={() => handleAddToCart()}
          className="outline text-[.8rem] font-bold uppercase tracking-[.4rem] py-3  bg-black text-white"
        >
          Add To Cart
        </button>
      ) : (
        <button
          className="cursor-not-allowed outline font-bold uppercase py-3 bg-black text-white opacity-[.8]"
          aria-disabled
        >
          Add To Cart
        </button>
      )}
    </div>
  );
};

export default ProductInfo;
