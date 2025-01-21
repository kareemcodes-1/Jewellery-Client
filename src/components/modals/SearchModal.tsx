import React, { useState } from "react";
import { createPortal } from "react-dom";
import { useNavigate } from "react-router";
import { useStore } from "../../store/store";

const SearchModal = ({
  closeSearchModal,
  openSearchModal,
}: {
  closeSearchModal: () => void;
  openSearchModal: boolean;
}) => {


  const navigate = useNavigate();
  const [value, setValue] = useState<string>('');
  const {handleSearch} = useStore();

  const handleKeyDown = (e: React.KeyboardEvent) => {
      if(e.key === 'Enter'){
          handleSearch(value);
          navigate(`/search/product?q=${value.toLowerCase().split(' ').join('-')}`);
      }
  }
  
  return createPortal(
    <div
      className={`fixed top-0 right-0 h-screen lg:w-[60%] w-full bg-white shadow-lg z-[1000] transform transition-transform duration-300 ${
        openSearchModal ? "translate-x-0" : "translate-x-full"
      }`}
    >
      <div
            className="absolute right-[1rem] top-[1rem] text-[1rem] font-semibold cursor-pointer manrope uppercase tracking-[.3rem]"
            onClick={closeSearchModal}
          >
            Close
          </div>
      <div className="flex items-start p-[1rem] mt-[10rem] gap-[1rem]">
        <div className="border-b border-black w-full">
            <input type="text"  placeholder="SEARCH PRODUCTS..." className="lg:text-[1.5rem] text-[1.2rem] w-full bg-transparent outline-none" id="" onChange={(e) => setValue(e.target.value)} onKeyDown={handleKeyDown}/>
        </div>
      </div>
    </div>,
    document.body
  );
};

export default SearchModal;
