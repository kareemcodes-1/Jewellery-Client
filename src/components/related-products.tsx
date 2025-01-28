import { useStore } from '@/store/store';
import { useEffect } from 'react'
import ProductCard from './products/ProductCard';

const RelatedProducts = () => {

    const {products, setProducts} = useStore();
    
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
        }, []);
    
        const relatedProducts = products.slice(0, 3);

  return (
    <div className="flex flex-col mb-[2rem]">
        <h2 className="lg:text-[5rem] text-[2.5rem] font-medium mb-[1rem]">Related Products</h2>
    <div className="lg:grid grid-cols-3 gap-[1rem]">
             {products.length > 0 ? (
                 relatedProducts.map((product) => (
                  <ProductCard product={product}/>
                 ))
             ) : (
                <p>No Related Products</p>
             )}
        </div>
                
      </div>
  )
}

export default RelatedProducts