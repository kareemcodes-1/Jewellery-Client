
import SplitText from "@/utils/split-text";
import gsap from "gsap";

import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);
export default function HomePage() {

  const ref = useRef<HTMLDivElement | null>(null);
  
  useEffect(() => {
    if(ref){
      gsap.fromTo(
        ref.current,
        { scale: 1.3 },// Start state
        {
          scale: 1,
          duration: 0.7,
          delay: 0.24,
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
    <div className=" overflow-hidden">
      <div className="home section relative" ref={ref}>
        <div className="absolute lg:bottom-[1rem] bottom-[1rem] lg:left-[10rem] right-[1rem]">
            <div className="flex flex-col items-end justify-end w-full">
              <a
                href="/products"
                className="text-white lg:mt-0 mt-[1rem] flex items-center gap-[.5rem] lg:justify-center justify-start"
              >
                <div className="overflow-hidden">
                <SplitText 
                text="SHOP ALL JEWELLERY"
                delay={50}
                animationFrom={{ opacity: 0, transform: 'translate3d(0,50px,0)' }}
                animationTo={{ opacity: 1, transform: 'translate3d(0,0,0)' }}
                // easing="easeOutCubic"
                threshold={0.2}
                rootMargin="0px" className="lg:text-[1.1rem] font-normal text-[1rem] uppercase tracking-[.2rem] antarctica hover:underline" />
                </div>
              </a>

            </div>
          </div>
      </div>
    </div>
  );
}
