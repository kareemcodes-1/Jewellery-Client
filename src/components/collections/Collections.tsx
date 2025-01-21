import { ArrowUpRight } from "lucide-react";
import { Collection } from "../../types/types";
import { useEffect } from "react";
import { useStore } from "../../store/store";
const Collections = () => {

  const {collections, setCollections} = useStore();

  useEffect(() => {
     fetch(`${import.meta.env.VITE_SERVER_URL}/api/collections`, {
      method: "GET",
      headers: {
        'Content-Type': 'application/json',
      }
     }).then((res) => res.json())
     .then((data) => setCollections(data))
     .catch((err) => console.log(err));
  }, [])

  return (
    <div className="lg:grid grid-cols-2">
      {collections.map((collection: Collection) => (
        <a
          href={`${import.meta.env.VITE_SERVER_URL}/collections/${collection._id}`}
          key={collection._id}
          className="relative ginger"
        >
          <img
            key={collection._id}
            src={collection.image}
            alt={collection.name}
            className="lg:w-[700px] w-full h-[500px] object-cover"
          />
          <div className="absolute bottom-[2rem] lg:right-[2rem] left-[1.5rem] text-white lg:text-[2rem] text-[1.8rem] flex items-center gap-[.5rem]">
            Shop {collection.name}{" "}
            <ArrowUpRight className="font-normal" size={35} />
          </div>
        </a>
      ))}
    </div>
  );
};

export default Collections;
