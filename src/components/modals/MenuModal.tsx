
import { useStore } from "@/store/store";
import gsap from "gsap";
import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import { useNavigate } from "react-router";


const MenuModal = ({
  closeMenuModal,
  openMenuModal,
  openSearch,
}: {
  closeMenuModal: () => void;
  openMenuModal: boolean;
  openSearch: () => void;
}) => {

  const ref = useRef<HTMLDivElement | null>(null);
  const {logout, userInfo} = useStore();
  
  useEffect(() => {
    console.log("openMenuModal:", openMenuModal);
    const modal = ref.current;
  
    if (openMenuModal && modal) {
      // Open animation
      gsap.fromTo(
        modal,
        { x: "-100%" },
        { x: 0, duration: 0.7, ease: "power3.inOut" }
      );
    }  else if (!openMenuModal && modal) {
      // Close animation
      gsap.to(modal, {
        x: "-100%",
        duration: 0.5,
        ease: "power3.inOut",
      });
    }
  }, [openMenuModal]);

  const navigate = useNavigate();

  async function Logout() {
    try {
      const res = await fetch(`${import.meta.env.VITE_SERVER_URL}/api/users/auth/logout`, {
        method: "POST",
      });

      if (res.ok) {
        logout();
        navigate("/");
      }
    } catch (error) {
      console.log(error);
    }
  }

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
    ref={ref}
      className={`fixed top-0 left-0 h-screen lg:w-[50%] w-full bg-white shadow-lg z-[1000]`}
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
               <li className="overflow-hidden"><a onClick={openSearch} className="nav-links">SEARCH</a></li>
               <li className="overflow-hidden"><a href="/orders" className="nav-links">ORDERS</a></li>
               {userInfo ? (
                <>
                <li className="overflow-hidden"><a href="/profile" className="nav-links">PROFILE</a></li>
                <li className="overflow-hidden"><a onClick={Logout} className="nav-links">LOGOUT</a></li>
                </>
               ): (
                <li className="overflow-hidden"><a href="/login" className="nav-links">LOGIN</a></li>
               )}
               {/* <li className="overflow-hidden"><a href="/orders" className="nav-links">WISHLIST</a></li>
               <li className="overflow-hidden"><a href="/orders" className="nav-links">CONTACT</a></li> */}
          </ul>
      </div>

       <img src="https://i.pinimg.com/736x/42/69/6b/42696bf2c8088eebcae27e49b825a519.jpg" alt="" className="lg:block hidden h-[30rem] justify-end self-end"/>
      </div>
    </div>,
    document.body
  );
};

export default MenuModal;
