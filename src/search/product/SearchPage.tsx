import { useStore } from '../../store/store'
import Layout from '../../layout';
import ProductCard from '../../components/products/ProductCard';
import RelatedProducts from '@/components/related-products';

const SearchPage = () => {

    const {filteredProducts} = useStore();

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