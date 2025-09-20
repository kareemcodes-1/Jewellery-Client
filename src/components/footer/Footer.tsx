import FadeContent from "@/utils/fade-content";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

export default function Footer() {  
    const ref = useRef<HTMLImageElement | null>(null);
  
    useEffect(() => {
      if(ref){
        gsap.fromTo(
          ref.current,
          { scale: 1.3 },// Start state
          {
            scale: 1,
            duration: 1,
            delay: 0.54,
            ease: "easeInOut",
            scrollTrigger: {
              trigger: ref.current,
              start: "top 80%",
              end: "bottom 20%",
              toggleActions: "play none none reverse",
              markers: false,
            },
          }
        );
      }
    }, [ref]);
  return (
    <>
      <footer className="footer lg:pt-[4rem] pt-[2rem]">
        <div className="footer_container container-1 mx-[1.5rem]">
          <div className="lg:grid lg:grid-cols-2 flex flex-col  mb-[2rem]">
            <div>
              <div className="mb-[3rem]">
              <FadeContent duration={1000} easing="ease-out" initialOpacity={0}>
              <a
                  href={"/"}
                  className="lg:text-[1.2rem] text-[1rem] font-medium mb-[3rem] tracking-[.3rem] uppercase"
                >
                  Sparké
                </a>
               </FadeContent>


                <FadeContent className="mt-[.5rem] lg:w-[400px] uppercase lg:text-[.9rem] text-[.8rem] tracking-[.05rem] font-[200]" duration={1000} easing="ease-out" initialOpacity={0}>
                The best store to find all your unique and quality
                jewelleries, we're unique in every way
               </FadeContent>
              </div>

              <div className="flex items-start lg:gap-[4rem] flex-row gap-[1rem] lg:mb-0 mb-[1.5rem]">
                <div id="footer-text">
                  <div className="flex items-start flex-col lg:text-[1rem] text-[.9rem] tracking-[.2rem] font-semibold lg:gap-[1.4rem] gap-[1rem] manrope">

                    <FadeContent  duration={1000} easing="ease-out" initialOpacity={0}>
                    <a href="/">HOME</a>
                   </FadeContent>
                   <FadeContent duration={1000} easing="ease-out" initialOpacity={0}>
                   <a href="/about">ABOUT US</a>
                   </FadeContent>
                   <FadeContent  duration={1000} easing="ease-out" initialOpacity={0}>
                   <a href="/contact">CONTACT US</a>
                   </FadeContent>
                   <FadeContent  duration={1000} easing="ease-out" initialOpacity={0}>
                   <a href="/products">PRODUCTS</a>
                   </FadeContent>
                  </div>
                </div>

                <div id="footer-text">
                  <div className="flex items-start flex-col lg:text-[1rem] text-[.9rem] tracking-[.2rem] font-medium lg:gap-[1.4rem] gap-[1rem] antarctica  uppercase">
                    {/* <a href="">Instagram</a>
                    <a href="">Facebook</a>
                    <a href="">Tiktok</a>
                    <a>Delivery & Returns</a> */}
                    <FadeContent duration={1000} easing="ease-out" initialOpacity={0}>
                    <a href="">Instagram</a>
                   </FadeContent>
                   <FadeContent  duration={1000} easing="ease-out" initialOpacity={0}>
                   <a href="">Facebook</a>
                   </FadeContent>
                   <FadeContent duration={1000} easing="ease-out" initialOpacity={0}>
                   <a href="">Tiktok</a>
                   </FadeContent>
                   <FadeContent  duration={1000} easing="ease-out" initialOpacity={0}>
                   <a>Delivery & Returns</a>
                   </FadeContent>
                   <FadeContent duration={1000} easing="ease-out" initialOpacity={0}>
                   <a>Vip Access</a>
                   </FadeContent>
                  </div>
                </div>
              </div>
            </div>

            <div className="overflow-hidden">
              <img
                src={"https://arozjewelry.com/themes/Arozjewelry_2/assets/img/home/gravure_image_2.jpeg"}
                alt=""
                className="h-[400px] w-full object-cover"
                ref={ref}
              />
            </div>
          </div>

          <div className="flex lg:flex-row flex-col lg:items-center gap-[.5rem] justify-between">
            <div className="flex lg:flex-row flex-col lg:items-center lg:gap-[1.5rem] gap-[.5rem] lg:text-[1rem] text-[.9rem] tracking-[.2rem] font-semibold uppercase manrope">

              <FadeContent duration={1000} easing="ease-out" initialOpacity={0}>
              <div className="antarctica uppercase font-[200]">Terms + Conditions</div>
               </FadeContent>

              <FadeContent duration={1000} easing="ease-out" initialOpacity={0}>
                <div className="antarctica uppercase font-[200]">Privacy Policy</div>
               </FadeContent>
            </div>

            {/* <div id="footer-text" className="lg:text-[1rem] text-[.9rem] tracking-[.2rem] font-semibold uppercase manrope">© Chi Luxury 2024.</div> */}
            <FadeContent duration={1000} easing="ease-out" initialOpacity={0}>
                <div className="lg:text-[1rem] text-[.9rem] tracking-[.2rem] antarctica uppercase font-[200]">© Sparké 2024.</div>
             </FadeContent>

          </div>
        </div>
      </footer>
    </>
  );
}
