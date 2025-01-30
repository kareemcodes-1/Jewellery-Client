import Layout from '@/layout'
import { useEffect } from 'react'
import ProductCard from './ProductCard'
import { useStore } from '@/store/store'

const AllProducts = () => {

    const {products, setProducts} = useStore();

    useEffect(() => {
        (async function () {
            const res = await fetch(`${import.meta.env.VITE_SERVER_URL}/api/products`, {
                method: "GET",
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            const data = await res.json();
            setProducts(data);
          })();
    }, [])

  return (
    <Layout>
        <div className='lg:mt-[5rem] mt-[4rem]'>
            <h1 className='text-[4rem] lg:text-start text-center'>Products</h1>
            <div className='lg:grid grid-cols-3 gap-[1rem]'>
                {products.map((product) => (
                    <ProductCard product={product}/>
                ))}
            </div>
        </div>
    </Layout>
  )
}

export default AllProducts