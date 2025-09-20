import { useState } from "react";
// import HeartFavorite from "./HeartFavorite";
import { CartItem, Product } from "../../types/types";
import { useStore } from "../../store/store";
import formatCurrency from "../../utils/formatCurrency";
import toast from "react-hot-toast";
import { Minus, Plus } from "lucide-react";
import { Link } from "react-router";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";

const ProductInfo = ({ productInfo }: { productInfo: Product }) => {
  const { addToCart, setOpenCartModal, cart } = useStore();
  const [quantity, setQuantity] = useState<number>(1);

  function incrementQuantity(productId: string) {
    if (productId === productInfo._id) {
      setQuantity(quantity + 1);
    }
  }

  function decrementQuantity(productId: string) {
    if (productId === productInfo._id && quantity > 1) {
      setQuantity(quantity - 1);
    }
  }

  const handleAddToCart = () => {
    const existingProductInCart = cart.find(
      (item) => item.product._id === productInfo?._id
    );

    if (!existingProductInCart) {
      const data: CartItem = {
        product: {
          ...productInfo,
        },
        quantity,
      };
      addToCart(data);
      toast.success("Added to cart");
      setQuantity(1);
      setOpenCartModal(true);
    } else {
      toast.error("Item already in cart");
    }
  };

  return (
    <div className="flex flex-col gap-4 lg:w-[70%] w-full lg:border-[#e2e8f0] lg:border-r lg:px-[2rem] lg:sticky top-[5rem]">
      <div className="flex items-start gap-[1rem] mb-[1rem]">
        <Link
          to={"/"}
          className="uppercase border-r border-gray-400 pr-[.5rem] tracking-[.2rem] text-[.8rem]"
        >
          Shop
        </Link>

        <Link
          to={"/"}
          className="uppercase border-gray-400 pr-[.5rem] tracking-[.2rem] text-[.8rem] antarctica"
        >
          {productInfo.name}
        </Link>
      </div>

      <h2 className="gap-[.5rem] text-[1.5rem] font-semibold antarctica text-black uppercase tracking-[.2rem]">
        {productInfo.name}
      </h2>

      <div className="flex flex-col gap-2">
        <p className="font-light text-[.9rem] tracking-[.1rem] uppercase">
          {productInfo.description}
        </p>
      </div>

      <div className="border-[#e2e8f0] border-b"></div>

      <Accordion type="single" collapsible>
        <AccordionItem value="item-1">
          <AccordionTrigger className="lg:text-[1.3rem] antarctica uppercase text-[1.2rem] outline-none">
            PRICE
          </AccordionTrigger>
          <AccordionContent className="text-[1.3rem] font-medium antarctica">
            {formatCurrency(productInfo.price)}
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-2">
          <AccordionTrigger className="lg:text-[1.3rem] text-[1.2rem] antarctica outline-none">
            SIZE
          </AccordionTrigger>
          <AccordionContent className="font-light text-[.9rem] tracking-[.1rem] uppercase">
            UK K UK L UK M UK O UK P UK Q UK R UK S
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-3">
          <AccordionTrigger className="lg:text-[1.3rem] antarctica text-[1.2rem] outline-none">
            COLOR
          </AccordionTrigger>
          <AccordionContent className="font-light text-[.9rem] tracking-[.1rem] uppercase">
            Gold Material Gold Gold Material Rose gold Pink Material Pink
          </AccordionContent>
        </AccordionItem>
      </Accordion>

      <div className="flex flex-col gap-2">
        <div className="flex gap-4 items-center w-full justify-between my-[1.2rem] bg-[#00000017] p-[1rem] h-[3rem]">
          <Minus
            className="cursor-pointer"
            onClick={() => decrementQuantity(productInfo._id)}
          />
          <p className="text-body-bold">{quantity}</p>
          <Plus
            className="cursor-pointer"
            onClick={() => incrementQuantity(productInfo._id)}
          />
        </div>
      </div>

      <hr />

      {productInfo?.inStock ? (
        <button
          onClick={() => handleAddToCart()}
          className="outline text-[.8rem] font-medium uppercase tracking-[.4rem] py-3 bg-black text-white"
        >
          Add To Cart
        </button>
      ) : (
        <button
          className="cursor-not-allowed font-medium outline uppercase py-3 bg-black text-white opacity-[.8]"
          aria-disabled
        >
          Add To Cart
        </button>
      )}
    </div>
  );
};

export default ProductInfo;
