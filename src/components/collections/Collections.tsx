
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
          href={`/collections/${collection._id}`}
          key={collection._id}
          className="relative ginger"
        >
          <img
            key={collection._id}
            src={collection.image}
            alt={collection.name}
            className="w-full h-[500px] object-cover"
          />
          <div className="absolute bottom-[1.5rem] lg:right-[2rem] left-[1.5rem] text-white lg:text-[1.2rem] text-[1rem] flex items-center gap-[.5rem] uppercase font-semibold manrope tracking-[.2rem]">
            Shop {collection.name}{" "}
            <div className=" w-[2.5rem] h-[2.5rem] flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
                    />
                  </svg>
               </div>
          </div>
        </a>
      ))}
    </div>
  );
};

export default Collections;
