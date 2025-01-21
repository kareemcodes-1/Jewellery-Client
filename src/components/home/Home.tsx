
import gsap from "gsap";

import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
export default function HomePage() {

  return (
    <>
      <div className="home section relative">
        {/* <div className="absolute bottom-[0rem] lg:left-[10rem] right-[1rem]">
          <div className="flex flex-col items-end justify-end w-full">
            <div id="home-title">
              <a
                href={"/products"}
                className="text-[#fff]  lg:text-[1.3rem] text-[1rem] uppercase flex items-center gap-[.5rem] all-products"
              >
                SHOP ALL JEWELLRY <ArrowUpRight />
              </a>
            </div>

          
          </div>
           <div className="flex flex-col items-end justify-end w-full">
            <div id="home-title">
              <a
                href={"/products"}
                className="text-[#fff]  lg:text-[1.3rem] text-[1rem] uppercase flex items-center gap-[.5rem] all-products"
              >
                SHOP ALL JEWELLRY <ArrowUpRight />
              </a>
            </div>

            <div
              id="home-title"
              className="lg:text-[2rem] text-[1rem] mt-[1rem] lg:mb-0 mb-[1rem] text-[#fff] uppercase"
            >
              The best quality jewellery at it finest
            </div>

            <div className="flex items-center justify-center w-full mx-auto gap-[.5rem] text-[#fff] uppercase">
              <span
                className="lg:text-[5.5rem] md:text-[4rem] xs:text-[1.5rem] text-[1.7rem]"
                id="home-title"
              >
                Luxury Jewellery
              </span>
              <span
                id="home-title"
                className="lg:text-[5.5rem] md:text-[4rem] xs:text-[1.5rem] text-[1.7rem]"
              >
                &nbsp;defined
              </span>
            </div>
          </div>
        </div> */}
        <div className="absolute bottom-[0rem] lg:left-[10rem] right-[1rem]">
            <div className="flex flex-col items-end justify-end w-full">
              {/* <a
                href="/listings"
                className="text-white lg:mt-0 mt-[1rem] flex items-center font-semibold gap-[1rem] tracking-[.2rem] lg:justify-center justify-start"
              >
                <div>SHOP ALL JEWELLERY</div>
                <div className="border border-[#fff] rounded-full w-[2.5rem] h-[2.5rem] flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
                    />
                  </svg>
                </div>
              </a> */}

              <div className="flex items-start gap-[.5rem] justify-start text-[#fff]">
                <h3 className="lg:text-[8rem] md:text-[6rem] text-[2.7rem] text-white">
                  Exclusivity
                </h3>
                <h3 className="lg:text-[8rem] md:text-[6rem] text-[2.7rem] text-white">&nbsp;defined</h3>
              </div>
            </div>
          </div>
      </div>
    </>
  );
}
