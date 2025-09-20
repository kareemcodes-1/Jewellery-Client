import React from "react";
import Marquee from "react-fast-marquee";

const MarqueeText = () => {
  return (
    <div className="bg-black w-full py-4">
      <Marquee
        gradient={false} // disables fade effect at edges
        speed={50}       // adjust scroll speed
        pauseOnHover={true}
      >
        <p className="text-white text-lg font-[300] mx-8 tracking-[0.2em] uppercase">
          FREE SHIPPING — SHOP WITH US
        </p>
        <p className="text-white text-lg font-[300] mx-8 tracking-[0.2em] uppercase">
          FREE SHIPPING — SHOP WITH US
        </p>
        <p className="text-white text-lg font-[300] mx-8 tracking-[0.2em] uppercase">
          FREE SHIPPING — SHOP WITH US
        </p>
      </Marquee>
    </div>
  );
};

export default MarqueeText;
