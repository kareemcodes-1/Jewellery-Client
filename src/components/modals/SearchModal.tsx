import React, { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { useNavigate } from "react-router";
import { useStore } from "../../store/store";
import gsap from "gsap";
import { Search } from "lucide-react";

const SearchModal = ({
  closeSearchModal,
  openSearchModal,
}: {
  closeSearchModal: () => void;
  openSearchModal: boolean;
}) => {

  const ref = useRef<HTMLDivElement | null>(null);
  
  useEffect(() => {
    console.log("openSearchModal:", openSearchModal);
    const modal = ref.current;
  
    if (openSearchModal && modal) {
      // Open animation
      gsap.fromTo(
        modal,
        { x: "100%" },
        { x: 0, duration: 0.7, ease: "power3.inOut" }
      );
    }  else if (!openSearchModal && modal) {
      // Close animation
      gsap.to(modal, {
        x: "100%",
        duration: 0.5,
        ease: "power3.inOut",
      });
    }
  }, [openSearchModal]);

  const navigate = useNavigate();
  const [value, setValue] = useState<string>('');
  const {handleSearch} = useStore();

  const handleKeyDown = (e: React.KeyboardEvent) => {
      if(e.key === 'Enter'){
          handleSearch(value);
          navigate(`/search/product?q=${value.toLowerCase().split(' ').join('-')}`);
      }
  }

  const handleSearchProduct = () => {
        handleSearch(value);
        navigate(`/search/product?q=${value.toLowerCase().split(' ').join('-')}`);
}
  
  return createPortal(
    <div ref={ref}
      className={`fixed top-0 right-0 h-screen lg:w-[60%] w-full bg-white shadow-lg z-[1000]`}
    >
      <div
            className="absolute right-[1rem] top-[1rem] lg:text-[1.1rem] text-[1rem] font-semibold cursor-pointer manrope uppercase tracking-[.3rem]"
            onClick={closeSearchModal}
          >
            Close
          </div>
      <div className="flex items-start p-[1rem] mt-[10rem] gap-[1rem]">
        <div className="border-b border-black w-full">
            <input type="text"  placeholder="SEARCH PRODUCTS..." className="lg:block hidden lg:text-[1.5rem] text-[1.2rem] w-full bg-transparent outline-none tracking-[.3rem]" id="" onChange={(e) => setValue(e.target.value)} onKeyDown={handleKeyDown}/>
            <div className=" lg:hidden flex items-center">
            <input type="text"  placeholder="SEARCH PRODUCTS..." className=" lg:text-[1.5rem] text-[1.2rem] tracking-[.1rem] w-full bg-transparent outline-none" id="" onChange={(e) => setValue(e.target.value)} onKeyDown={handleKeyDown}/>
            <Search className="w-[2rem] h-[2rem] cursor-pointer" onClick={() => handleSearchProduct()}/>
            </div>
        </div>
      </div>
    </div>,
    document.body
  );
};

export default SearchModal;
