import ProductCard from "../components/products/ProductCard";
import { useEffect, useState } from "react";
import { Collection, Product } from "../types/types";
import { useStore } from "../store/store";
import { useParams } from "react-router-dom";
import Layout from "../layout";
import FilterModal from "@/components/modals/FilterModal";


const CollectionDetails = () => {
  const { id } = useParams();
  const [collection, setCollection] = useState<Collection | null>(null);
  const { products, setProducts, handleSort } = useStore();
  const [openSortDropDown, setOpenSortDropDown] = useState<boolean>(false);
  const [openFilterModal, setOpenFilterModal] = useState<boolean>(false);

  useEffect(() => {
    (async function () {
      const res = await fetch(`${import.meta.env.VITE_SERVER_URL}/api/collections/collection/${id}`, {
        method: "GET",
        headers: {
          'Content-Type': 'application/json',
        }
      });
      const data = await res.json();
      setCollection(data);
    })();

    (async function () {
      const res = await fetch(`${import.meta.env.VITE_SERVER_URL}/api/products`, {
        method: "GET",
        headers: {
          'Content-Type': 'application/json',
        }
      });
      const data = await res.json();
      setProducts(data);
    })();
  }, []);

  const filteredProducts = products.filter(
    (product) =>
      product.collectionId.name.toLowerCase() === collection?.name.toLowerCase()
  );

  return (
    <Layout>
       {openFilterModal && <FilterModal openFilterModal={openFilterModal} closeModal={() => setOpenFilterModal(false)}/>}
      <div className="lg:mt-[5rem] mt-[3rem]">
        <div className="py-5 flex flex-col items-center container-1">
          <div className="flex lg:flex-row flex-col lg:items-center items-start justify-between w-full">
            <h1 className="lg:text-[5rem] text-[3rem] text-black">
              {collection?.name} Collection
            </h1>

            <div className="flex gap-[1rem] items-center relative">
            <button type="button" className="outline text-[.8rem] font-bold uppercase tracking-[.4rem] p-[.8rem]  bg-black text-white"  onClick={() => setOpenFilterModal(true)}>Filter</button>
            <button type="button" className="outline text-[.8rem] font-bold uppercase tracking-[.4rem] p-[.8rem]  bg-black text-white" onClick={() => setOpenSortDropDown(!openSortDropDown)}>Sort</button>

            
            {openSortDropDown && (
            <div className="absolute left-0 top-[3.5rem] mt-2 w-[13rem] bg-white border border-gray-200 rounded-lg shadow-lg z-50">
              <ul className="flex flex-col text-[.925rem]">
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                  <button className="uppercase tracking-[.0925rem]" type="button">Popularity</button>
                </li>
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                  <button className="uppercase tracking-[.0925rem]" type="button" onClick={() => handleSort('latest')}>Latest</button>
                </li>
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                  <button className="uppercase tracking-[.0925rem]" type="button" onClick={() => handleSort('low_to_high')}>Price:Low to High</button>
                </li>

                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                  <button className="uppercase tracking-[.0925rem]" type="button" onClick={() => handleSort('high_to_low')}>Price:High to Low</button>
                </li>

                <li onClick={() => handleSort('reset')}  className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                  <button className="uppercase tracking-[.0925rem]" type="button" >Reset</button>
                </li>
              </ul>
            </div>
             )}
            </div>
            {/* <button><AdjustmentsVertical className="w-[2rem] h-[2rem]"/></button>
            <button><BarsArrowDown className="w-[2rem] h-[2rem]"/></button> */}
            {/* <button type="button">Filter</button> */}
          </div>
          <div className="lg:grid flex items-start flex-col gap-[1rem] grid-cols-3">
            {filteredProducts.map((product: Product) => (
              <ProductCard key={product._id} product={product} />
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default CollectionDetails;
