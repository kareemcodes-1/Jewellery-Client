import { useEffect, useRef } from "react";
import gsap from "gsap";

const About2 = () => {
  const textRef = useRef<HTMLHeadingElement | null>(null);
  const imgRef = useRef<HTMLImageElement | null>(null);

  useEffect(() => {
    // IMAGE ANIMATION with GSAP
    if (imgRef.current) {
      gsap.fromTo(
        imgRef.current,
        { scale: 1.3 },
        {
          scale: 1,
          duration: 1,
          delay: 0.54,
          ease: "easeInOut",
        }
      );
    }

    // TEXT SPLIT + OBSERVER
    if (textRef.current) {
      const words = textRef.current.innerText.split(" ");
      textRef.current.innerHTML = words
        .map(
          (word) =>
            `<span class="inline-block opacity-0 translate-y-3 whitespace-normal break-words">${word}&nbsp;</span>`
        )
        .join(" ");

      const spans = textRef.current.querySelectorAll("span");

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              gsap.to(spans, {
                opacity: 1,
                y: 0,
                duration: 0.6,
                ease: "power3.out",
                stagger: 0.08,
              });
              observer.disconnect(); // run only once
            }
          });
        },
        { threshold: 0.2 }
      );

      observer.observe(textRef.current);
    }
  }, []);

  return (
    <section className="pb-[2rem]">
      <div className="lg:grid flex flex-col grid-cols-2 lg:gap-0 gap-[3rem] lg:pt-0 pt-[3rem]">
        <div className="lg:m-auto lg:px-[calc(4.33333333vw)]">
          <h1
            ref={textRef}
            className="lg:text-[calc(3.2vw)] lg:p-0 p-[1rem] text-[2rem] font-[300] antarctica uppercase leading-[1.3] break-words"
          >
            Sparké exists for the moments you choose to shine reflecting your
            strength, elegance, and story.
          </h1>
        </div>

        <div className="relative w-full h-[30rem] image-container">
          <img
            ref={imgRef}
            src="https://framerusercontent.com/images/mMK3STq0CXQnA3Fv43Y4SbMoPI.png"
            className="w-full object-cover h-full"
          />
        </div>
      </div>
    </section>
  );
};

export default About2;
