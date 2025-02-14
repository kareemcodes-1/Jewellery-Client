import{ useEffect, useRef, useState } from 'react'
import { createPortal } from 'react-dom';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../../components/ui/accordion"

import { Slider } from "../../components/ui/slider"
import { Switch } from "../../components/ui/switch"
import { useStore } from '../../store/store';
import { formatCurrency } from '../../lib/formatCurrency';
import gsap from 'gsap';

interface FilterModalProps{
  openFilterModal: boolean;
  closeModal: () => void;
  // filterInStock: boolean;
  // setFilterInStock: (value: boolean) => void;
  
}


const FilterModal : React.FC<FilterModalProps> = ({openFilterModal, closeModal}) => {

  const [value, setValue] = useState<number>(0);
  const {collections, handleFilterByPrice, resetFilter, setCollections, filterInStock, setFilterInStock} = useStore();
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
      fetch(`${import.meta.env.VITE_SERVER_URL}/api/collections`, {
        method: "GET",
        headers: {
          'Content-Type': 'application/json'
        }
      }).then((res) => res.json()).then((data) => setCollections(data)).catch((err) => console.log(err));
  }, [])

  useEffect(() => {
    const modal = ref.current;
  
    if (openFilterModal && modal) {
      // Open animation
      gsap.fromTo(
        modal,
        { x: "100%" },
        { x: 0, duration: 0.7, ease: "power3.inOut" }
      );
    }  else if (!openFilterModal && modal) {
      // Close animation
      gsap.to(modal, {
        x: "100%",
        duration: 0.5,
        ease: "power3.inOut",
      });
    }
  }, [openFilterModal]);

  console.log(filterInStock);



  return createPortal(
      <div ref={ref}
        className={`fixed top-0 right-0 h-screen lg:w-[40%] w-full bg-white shadow-lg p-[1rem] z-[1000]`}
      >
          <div className='w-full mb-[1rem]'>
          <h1 className="lg:text-[1.1rem] text-[1rem]  manrope font-semibold tracking-[.3rem] manrope">FILTERS</h1>
          <div onClick={closeModal}
            className="absolute right-[1rem] top-[1rem] lg:text-[1.1rem] text-[1rem]  cursor-pointer manrope uppercase tracking-[.3rem] font-semibold"
          >
            Close
          </div>
          </div>

          <div>
              <Accordion type="single" collapsible>
                <AccordionItem value="item-1">
                <AccordionTrigger className='text-[1rem] manrope tracking-[.1rem]'>PRICE</AccordionTrigger>
                   <AccordionContent>
                   <Slider defaultValue={[0]} max={10000} step={100} onValueChange={(values) => {
                    const maxPrice = values[0];
                     setValue(maxPrice);
                     handleFilterByPrice(maxPrice);}}/>
                   <div className="mt-2 text-center">
                       Price: {formatCurrency(value)}
                    </div>
                   </AccordionContent>
                 </AccordionItem>
              </Accordion>
          </div>

          <div>
              <Accordion type="single" collapsible>
                <AccordionItem value="item-1">
                <AccordionTrigger className='text-[1rem] manrope tracking-[.1rem]'>AVAILIABLITY</AccordionTrigger>
                   <AccordionContent>
                      <div className='flex items-center gap-[3rem]'>
                      <div className='flex items-start gap-[.3rem]'>
                           <Switch defaultChecked={filterInStock} onCheckedChange={() => setFilterInStock(!filterInStock)}/>
                           <p>In Stock </p>
                      </div>
                      </div>
                  </AccordionContent>
                 </AccordionItem>
              </Accordion>
          </div>

          <div>
              <Accordion type="single" collapsible>
                <AccordionItem value="item-1">
                <AccordionTrigger className='text-[1rem] manrope tracking-[.1rem]'>SIZE</AccordionTrigger>
                   <AccordionContent>
                       Yes. It adheres to the WAI-ARIA design pattern.
                   </AccordionContent>
                 </AccordionItem>
              </Accordion>
          </div>

          <div>
              <Accordion type="single" collapsible>
                <AccordionItem value="item-1">
                <AccordionTrigger className='text-[1rem] manrope tracking-[.1rem]'>CATEGORIES</AccordionTrigger>
                   <AccordionContent>
                       <div className='flex flex-col gap-[.3rem]'>{collections.map((collection) => (
                            <a href={`collections/collection/${collection._id}`} className='azert-mono text-gray-500'>{collection.name} collection</a>
                       ))}</div>
                   </AccordionContent>
                 </AccordionItem>
              </Accordion>
          </div>

          <button type="button" onClick={resetFilter} className='bg-black hover:opacity-80 transition-opacity mx-auto mt-[1.5rem] w-[15rem] p-[.8rem] tracking-[.4rem] text-[.8rem] font-bold text-white flex text-center items-center justify-center uppercase'>Reset Filter</button>
      </div>,
      document.body
    );
}

export default FilterModal