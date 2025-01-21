import { createPortal } from "react-dom";
import { useStore } from "../../store/store";
import CheckoutBtn from "../checkout-btn";
import toast from "react-hot-toast";
import { Trash } from "lucide-react";

const CartModal = ({
  closeCartModal,
  openCartModal,
}: {
  closeCartModal: () => void;
  openCartModal: boolean;
}) => {
  const { cart, incrementQuantity, decrementQuantity, totalAmount, deleteCartItem, deleteAllCartItems } = useStore();
  

  return createPortal(
    <div
      className={`fixed top-0 right-0 h-screen lg:w-[40%] w-full bg-white shadow-lg z-[1000] transform transition-transform duration-300 ${
        openCartModal ? "translate-x-0" : "translate-x-full"
      }`}
    >
      <div className="flex h-full">

        <div className="w-full h-full sticky top-0">
          <h1 className="text-[1rem] p-[1rem] manrope font-semibold tracking-[.1rem]">YOUR BASKET</h1>
          <div
            className="absolute right-[1rem] top-[1rem] text-[1rem] font-semibold cursor-pointer manrope uppercase tracking-[.3rem]"
            onClick={closeCartModal}
          >
            Close
          </div>

          {cart.length > 0 ? (
            cart.map((item) => (
              <div className="flex items-center justify-between w-full p-[1rem] border">
                <div className="flex items-center gap-[1rem]">
                  <img
                    src={item.product.images[0]}
                    alt=""
                    className="w-[5rem] h-[5rem] object-cover"
                  />
  
                  <div>
                    <h1 className="text-[.8rem] tracking-[.2rem] font-semibold manrope uppercase text-black">{item.product.name}</h1>

                    <p className="text-[1rem] font-semibold">${item.product.price}</p>
                  </div>
                </div>
  
                <div className="flex items-center gap-[.5rem]">
                <div className="rounded-[1rem] flex items-center justify-center w-[4rem] gap-[.5rem] p-[.5rem] h-[2.2rem]  ">
                  <button
                    className="text-[1.5rem] azert-mono font-light"
                    onClick={() => decrementQuantity(item.product._id)}
                  >
                    -
                  </button>
                  <div className="text-[1.2rem]">{item.quantity}</div>
                  <button
                    className="text-[1.5rem] azert-mono font-light"
                    onClick={() => incrementQuantity(item.product._id)}
                  >
                    +
                  </button>
                </div>
  
                <Trash className="cursor-pointer text-rose-500" onClick={() => {deleteCartItem(item.product._id); toast.success('Deleted Item');}}/>
                </div>
              </div>
            ))
          ) : (
              <span className="text-center flex items-center font-semibold text-black tracking-[.2rem]  justify-center mt-[10rem]">CART IS EMPTY.</span>
          )}

          {cart.length > 0 && (
            <div className="absolute bottom-0 w-full">
            <div className="w-full">
                <div className="py-[.5rem] px-[1rem] flex items-center justify-between">
                 <h2 className="text-[1rem] manrope font-semibold uppercase">Grand Total</h2>

                <div>
                    <p className="text-[1.3rem] font-semibold">${totalAmount}</p>
                </div>
                </div>
            </div>

            <div className="w-full border-t border-black">
                <div className="flex lg:flex-row flex-col items-center justify-between w-full px-[.4rem] py-[1rem] gap-[.5rem]">
                <button type="button" className='bg-black mt-[.5rem] p-[.8rem] tracking-[.4rem] text-[.8rem] font-bold text-white  text-center uppercase w-full' 
                onClick={() => {
                 deleteAllCartItems()
                 toast.success('Deleted Cart');
                }}>DELETE ALL</button>
                <CheckoutBtn />
                </div>
            </div>
       </div>
          )}
        </div>
      </div>
    </div>,
    document.body
  );
};

export default CartModal;
