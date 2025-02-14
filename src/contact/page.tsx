import Layout from "@/layout"
import { useEffect } from "react";
import Lenis from "lenis";
import 'lenis/dist/lenis.css'


const ContactPage = () => {
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
      <section className="contact lg:mt-[7rem] mt-[5rem]">
             <div className="contact-container container-1 flex lg:items-center items-start lg:flex-row flex-col gap-[2rem]">
                   <img src={'https://i.pinimg.com/736x/e4/0b/1b/e40b1b1c2f85396d833e941a4782cb85.jpg'} alt="contact-img" className="lg:w-[700px] w-full lg:h-[500px] h-[400px] object-cover" />

                   <div className="my-[2rem] lg:w-[40%] w-auto flex items-end justify-end flex-col">
                       <div className="font-bold lg:text-[2rem] text-[1.2rem] mb-[2rem] tracking-[.3rem]">CONTACT</div>
                       <div className="mb-[2rem]">
                           <span className="lg:text-[1rem] text-[.9rem] mb-[.5rem] flex items-end justify-end tracking-[.3rem]">CUSTOMER SERVICE:</span>
                           <div className="font-bold lg:text-[2rem] text-[1.2rem] tracking-[.3rem]">chiluxury@gmail.com</div>
                       </div>

                       <div>
                           <span className="mb-[.5rem] flex items-end justify-end lg:text-[1rem] text-[.9rem] tracking-[.3rem]">PHONE CALL:</span>
                           <div className="font-bold lg:text-[2rem] text-[1.2rem] tracking-[.3rem]">+2349117070776</div>
                       </div>
                   </div>
             </div>
        </section>
    </Layout>
  )
}

export default ContactPage