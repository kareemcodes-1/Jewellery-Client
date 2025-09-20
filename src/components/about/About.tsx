import AnimatedContent from "@/utils/animated-content";
import SplitText from "@/utils/split-text";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const About = () => {

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
    <section className=" mt-[5rem] pb-[2rem]">
      <div className=" container-1 flex items-center lg:flex-row flex-col gap-[2rem]">
        <div className="lg:w-[50%] w-full overflow-hidden">
          <img ref={ref}
            src={
              "https://framerusercontent.com/images/FpJkmcO1nccrgnuOzf2HY1gd9kc.png"
            }
            className="w-full object-cover lg:h-[600px] h-[500px]"
            // id="about-img"
          />
        </div>

        <div className="lg:w-[50%] w-full">

              <SplitText
                text="Designed to be Redesigned"
                delay={50}
                animationFrom={{ opacity: 0, transform: 'translate3d(0,50px,0)' }}
                animationTo={{ opacity: 1, transform: 'translate3d(0,0,0)' }}
                // easing="easeOutCubic"
                threshold={0.2}
                rootMargin="0px" className="lg:text-[2.5rem] text-[2rem] lg:leading-[2.8rem] leading-[2.5rem] font-medium ginger uppercase" />


          <div className="overflow-hidden">
          <AnimatedContent
            distance={150}
            direction="horizontal"
            reverse={true}
            config={{ tension: 80, friction: 20 }}
            initialOpacity={0.2}
            animateOpacity
            scale={1.1}
            threshold={0.2}
          >
            <p className=" uppercase text-black text-[.925rem] leading-[1.4rem] font-[200] lg:w-[500px]">
              The range is made up of the ultimate staples – designed to be
              redesigned, with a simple yet powerful aesthetic, and an
              urban-industrial edge{" "}
            </p>
          </AnimatedContent>
          </div>

          <div className="overflow-hidden">
          <AnimatedContent
            distance={150}
            direction="horizontal"
            reverse={true}
            config={{ tension: 80, friction: 20 }}
            initialOpacity={0.2}
            animateOpacity
            scale={1.1}
            threshold={0.2}
          >
          <p className="my-[2rem] uppercase text-black text-[.925rem] leading-[1.4rem] font-[200]">
            Our pieces are sustainable in more ways than one. It’s not just down
            to the materials we use, but they’re transformable, meaning there’s
            never just one way to wear them. Their modular and versatile nature
            allows you to reimagine them over and over, encouraging you to adapt
            and redefine.
          </p>

          </AnimatedContent>
          </div>
          <a
            href={"/about"}
            className="bg-black mt-[1rem] h-[3.5rem] text-[.8rem] font-bold text-white w-[10rem] p-[.8rem] text-center tracking-[.5rem] items-center justify-center"
          >
            SEE MORE
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
