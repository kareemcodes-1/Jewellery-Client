import { useStore } from '../../store/store'
import Layout from '../../layout';
import ProductCard from '../../components/products/ProductCard';
import RelatedProducts from '@/components/related-products';
import { useEffect } from 'react';
import { useSearchParams } from 'react-router';
import Lenis from "lenis";
import 'lenis/dist/lenis.css'

const SearchPage = () => {

  const {setProducts, products} = useStore();

  useEffect(() => {
    const lenis = new Lenis({
      autoRaf: true,
    });
    
    // Listen for the scroll event and log the event data
    lenis.on('scroll', () => {
    });
  }, []);

  let [searchParams] = useSearchParams();
  const value = searchParams.get("q") as string;

  useEffect(() => {
    (async function (){
      try {
          const res = await fetch(`${import.meta.env.VITE_SERVER_URL}/api/products`);
          const data = await res.json();
          setProducts(data);
      } catch (error) {
          console.log(error);
      }
     })()
  }, [value]);

  const filteredProducts = products.filter((product) => 
    product.name.toLowerCase().includes(value.replace(/-/g, " ").toLowerCase())
  );

  return (
    <Layout>
        <div className='mt-[5rem] mb-[1rem] px-[1rem]'>
            <h1 className='lg:text-[5rem] text-[2.5rem]'>{filteredProducts.length} Results found.</h1>
            {filteredProducts.map((product) => (
                  <ProductCard product={product} key={product._id}/>
             ))}

             <div className='mt-[3rem]'>
             <RelatedProducts />
             </div>
        </div>
    </Layout>
  )
}

export default SearchPage