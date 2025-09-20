import { useEffect } from "react";
import Layout from "../layout";
import Lenis from "lenis";
import 'lenis/dist/lenis.css'

const AboutPage = () => {

  useEffect(() => {
    const lenis = new Lenis({
      autoRaf: true,
    });
    
    // Listen for the scroll event and log the event data
    lenis.on('scroll', () => {
    });
  }, []);

  return (
    <Layout>
      <section className="about mt-[6rem]">
        <div className="about-container container-1">
          <div className="about-grid lg:grid flex items-center flex-col gap-[2rem] grid-cols-2">
            <div className="overflow-hidden">
              <img
                src={"https://img.sovajewels.com/resize_cache/imagick/iblock/540/960x1200q100-ci080t2a906y7gyggyirduycxgcxfst0.webp"}
                alt="about-img"
                className="w-full h-[500px] object-cover"
                id="about-img"
              />
            </div>

            <div>
              <h2 className="text-[1.5rem] font-semibold tracking-[.2rem] ginger my-[1rem]" id="about-text">
                WE ARE ALL ABOUT ELEGANCE
              </h2>
             <div className=" leading-[1.5rem] flex flex-col gap-[2rem]">
               <p id="about-text" className="uppercase text-[.925rem] font-[300] antarctica">
                Designer + Founder Veloura is based in her studio in the UK.
                Veloura received her formal training at the prestigious Central
                Saint Martins College of Art and Design, graduating with a BA in
                Jewellery Design in 2015. Veloura has gained accolades
                recognising her work as a designer.
              </p>
              <p id="about-text" className="uppercase text-[.925rem] font-[300] antarctica">
                 Featuring in magazines such
                as Harper’s Bazaar, British Vogue and the Sunday Telegraph as
                well as exhibiting at the V&A. After graduating she moved to New
                York, working for Tiffany & Co. creating jewellery collections
                within the luxury corporate fashion world. After eight years in
                the industry as a designer, We launched Veloura with the
                vision to create a quality line of jewellery made up of the
                ultimate staples that can be worn in multiple ways – designed to
                be redesigned. All Veloura pieces are fully designed by
                Charlotte in her studio, and handmade ethically by craftsman in
                thailand using sustainable materials.
              </p>
             </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default AboutPage;
