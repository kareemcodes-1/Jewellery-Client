
import { createPortal } from "react-dom";


const MenuModal = ({
  closeMenuModal,
  openMenuModal,
}: {
  closeMenuModal: () => void;
  openMenuModal: boolean;
}) => {

    // useEffect(() => {
    //     if(openMenuModal){
    //         const navLinks = new SplitText(document.querySelectorAll('.nav-links'), {type: "lines"});
    //         gsap.from(navLinks.lines, {
    //             yPercent: 100,
    //             stagger: 0.1,
    //             duration: 0.8,
    //             ease: "power3.inOut"
    //         })
    //     }
    // }, [openMenuModal]);

  return createPortal(
    <div
      className={`fixed top-0 left-0 h-screen lg:w-[50%] w-full bg-white shadow-lg z-[1000] transform transition-transform duration-300 ${
        openMenuModal ? "translate-x-0" : "translate-x-full"
      }`}
    >
      <div className="">
          <div
            className="absolute right-[1rem] top-[1rem] text-[1rem] font-semibold  manrope uppercase tracking-[.3rem] cursor-pointer"
            onClick={closeMenuModal}
          >
            CLOSE
          </div>
        </div>


      <div className="flex flex-col gap-[1rem]">
      <div className="flex items-start flex-col p-[1rem] mt-[10rem] gap-[1rem]">
          <ul className="flex flex-col text-[3rem] font-medium tracking-[.2rem]">
               <li className="overflow-hidden"><a href="/" className="nav-links">HOME</a></li>
               <li className="overflow-hidden"><a href="/products" className="nav-links">PRODUCTS</a></li>
               <li className="overflow-hidden"><a href="/orders" className="nav-links">ORDERS</a></li>
               <li className="overflow-hidden"><a href="/products" className="nav-links">SEARCH</a></li>
               {/* <li className="overflow-hidden"><a href="/orders" className="nav-links">WISHLIST</a></li>
               <li className="overflow-hidden"><a href="/orders" className="nav-links">CONTACT</a></li> */}
          </ul>
      </div>

       <img src="/fun.webp" alt="" className="lg:block hidden h-[30rem] justify-end self-end"/>
      </div>
    </div>,
    document.body
  );
};

export default MenuModal;
