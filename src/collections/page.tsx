import ProductCard from "../components/products/ProductCard";
import { useEffect, useState } from "react";
import { Collection, Product } from "../types/types";
import { useStore } from "../store/store";
import { useParams } from "react-router-dom";
import Layout from "../layout";

const CollectionDetails = () => {
  const { id } = useParams();
  const [collection, setCollection] = useState<Collection | null>(null);
  const { products, setProducts } = useStore();

  useEffect(() => {
    (async function () {
      const res = await fetch(`/api/collections/collection/${id}`);
      const data = await res.json();
      setCollection(data);
    })();

    (async function () {
      const res = await fetch(`/api/products`);
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
      <div className="lg:mt-[5rem] mt-[3rem]">
        <div className="py-5 flex flex-col items-center container-1">
          <div className="flex items-center justify-between w-full">
            <h1 className="lg:text-[5rem] text-[3rem] text-black">
              {collection?.name} Collection
            </h1>
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
