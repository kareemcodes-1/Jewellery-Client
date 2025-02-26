import { Collection } from "../../types/types";
import { useEffect, useState, useRef } from "react";
import { useStore } from "../../store/store";
import SplitText from "@/utils/split-text";
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Collections = () => {
  const { collections, setCollections } = useStore();
  const [loading, setLoading] = useState<boolean>(false);
  const imageRefs = useRef<(HTMLImageElement | null)[]>([]); // Create an array of refs

  useEffect(() => {
    setLoading(true);
    fetch(`${import.meta.env.VITE_SERVER_URL}/api/collections`, {
      method: "GET",
      headers: {
        'Content-Type': 'application/json',
      }
    })
      .then((res) => res.json())
      .then((data) => setCollections(data))
      .catch((err) => console.log(err))
      .finally(() => setLoading(false));
  }, []);

  useEffect(() => {
    // Iterate through each image ref and apply animation individually
    imageRefs.current.forEach((ref,) => {
      if (ref) {
        gsap.fromTo(
          ref,
          { scale: 1.3 }, // Start state
          {
            scale: 1,
            duration: 1,
            delay: 0.54,
            ease: "easeInOut",
            scrollTrigger: {
              trigger: ref,
              start: "top 80%",
              end: "bottom 20%",
              toggleActions: "play none none reverse",
              markers: false,
            },
          }
        );
      }
    });
  }, [collections]);

  return (
    <div className="lg:grid grid-cols-2">
      {collections.map((collection: Collection, index) => (
        loading ? 
          <Skeleton key={collection._id} className="w-full h-[500px]" /> : 
          <a
            href={`/collections/${collection._id}`}
            key={collection._id}
            className="relative ginger"
          >
            <div className="overflow-hidden w-full h-[500px]">
              {/* Attach unique ref to each image */}
              <img
                src={collection.image}
                alt={collection.name}
                ref={(el) => {
                  imageRefs.current[index] = el;
                }}
                className="w-full h-full object-cover collection-img"
              />
            </div>
            <div className="absolute bottom-[1.5rem] lg:right-[2rem] left-[1.5rem] text-white lg:text-[1.2rem] text-[1rem] flex items-center gap-[.5rem] uppercase font-semibold manrope tracking-[.2rem] w-full">
              <SplitText
                text={`Shop ${collection.name}`}
                delay={50}
                animationFrom={{ opacity: 0, transform: 'translate3d(0,50px,0)' }}
                animationTo={{ opacity: 1, transform: 'translate3d(0,0,0)' }}
                threshold={0.2}
                rootMargin="-50px"
                className="uppercase font-semibold manrope tracking-[.2rem]" />
              <div className="flex">
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
            </div>
          </a>
      ))}
    </div>
  );
};

export default Collections;
