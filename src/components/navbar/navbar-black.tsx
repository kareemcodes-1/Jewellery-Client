
import { Menu,ShoppingCart } from "lucide-react";
import { useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useStore } from "../../store/store";
import SearchModal from "../modals/SearchModal";
import CartModal from "../modals/CartModal";
import MenuModal from "../modals/MenuModal";
import { Link } from "react-router";

gsap.registerPlugin(ScrollTrigger);

export default function NavbarHome() {
    const [openSearchModal, setOpenSearchModal] = useState<boolean>(false);
    const [openMenuModal, setOpenMenuModal] = useState<boolean>(false);
    const {cart, openCartModal, setOpenCartModal, userInfo} = useStore();

  return (
    <>
      {openCartModal && <CartModal  />}
      {openSearchModal && <SearchModal openSearchModal={openSearchModal} closeSearchModal={() => setOpenSearchModal(false)} />}
      {openMenuModal && <MenuModal openSearch={() => setOpenSearchModal(true)} openMenuModal={openMenuModal} closeMenuModal={() => setOpenMenuModal(false)} />}
      <header
        className={
          "fixed top-0 left-0 right-0 w-full px-[1.5rem] py-[.5rem] z-[1000]"
        }
      >
        <nav className="flex items-center justify-between text-[1rem] text-black">
           <div className="flex items-center justify-center gap-[1.5rem]">
              <div onClick={() => setOpenMenuModal(true)} className=" lg:block hidden  nav-open cursor-pointer text-[1.1rem] font-semibold tracking-[.3rem]">
                MENU
              </div>

              <div className="lg:hidden block text-[1rem] nav-open cursor-pointer nav-link">
                <Menu onClick={() => setOpenMenuModal(true)}  className="nav-open lg:w-[1.2rem] xs:text-[1rem] w-[1.2rem]" />
              </div>

              <a href={"/about"} className="lg:block hidden cursor-pointer text-[1.1rem] font-semibold tracking-[.3rem]">
                ABOUT
              </a>
            </div>

            <div className="flex text-[2rem] items-center justify-center lg:ml-[5rem] ml-0">
            <a
              href={"/"}
              id="nav"
              className="flex lg:text-[1.8rem] xs:text-[1rem] text-[1.2rem] items-center justify-center lg:ml-[5rem] ml-0 font-semibold tracking-[.3rem]"
            >
              CHI LUXURY
            </a>
          </div>

          <div className="flex items-center justify-center gap-[2rem]">
              <a
                onClick={() => setOpenCartModal(true)}
                className="lg:block hidden cursor-pointer text-[1.1rem] font-semibold tracking-[.3rem]"
              >
                CART ({cart.length})
              </a>

              <ShoppingCart className="lg:hidden block cursor-pointer" onClick={() => setOpenCartModal(true)}/>

              <div onClick={() => setOpenSearchModal(true)} className="lg:block hidden search cursor-pointer text-[1.1rem] font-semibold tracking-[.3rem]">
                SEARCH
              </div>

              <a className="lg:block hidden cursor-pointer text-[1.1rem] font-semibold tracking-[.3rem]">
                {userInfo ? 'ACCOUNT' : <Link to={'/login'}>LOGIN</Link>}
              </a>


            </div>
        </nav>
      </header>

      <div>
        <div className="nav-overlay"></div>
        <div className="nav-menu">
          <div className="nav-menu-wrapper">
            <div className="absolute right-[2rem] top-[1rem] text-[1.5rem] nav-close cursor-pointer">
              CLOSE
            </div>
            <div className="flex items-center gap-[1rem]">
              <div className="flex flex-col xs:gap-[2rem] gap-[2.5rem] font-bold mt-[10rem] xs:text-[1rem] text-[1.2rem] mx-[1.5rem]">
                <a href="/" className="nav-link">
                  HOME
                </a>
                <a className="nav-link search cursor-pointer">SEARCH</a>
                <a href="/about" className="nav-link">
                  ABOUT US
                </a>
                <a href="/orders" className="search cursor-pointer">
                  ORDERS
                </a>
                <a href="/wishlist">WISHLIST</a>
                <a href="/contact" className="nav-link">
                  CONTACT
                </a>
                <a href="/products" className="nav-link">
                  PRODUCTS
                </a>
              </div>
              <img
                src={"/ran4.jpg"}
                alt=""
                className="w-[400px] h-[400px] object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      {/* <div className="nav-search">
        <div className="nav-search-container flex items-center justify-center m-auto ">
          <div className="absolute right-[2rem] top-[1rem] text-[1.5rem] search-close cursor-pointer">
            CLOSE
          </div>
          <div className="mt-[15rem] flex items-center gap-[.5rem]">
            <button
              disabled={query === ""}
              onClick={() => router.push(`/search/${query}`)}
            >
              <Search className="cursor-pointer h-8 w-8" />
            </button>
            <input
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              name=""
              id=""
              className="lg:w-[40rem] xs:w-[15rem] w-[20rem] outline-none border-b border-black text-[1.5rem] bg-transparent "
              placeholder="Search Products..."
            />
          </div>
        </div>
      </div> */}
    </>
  );
}
