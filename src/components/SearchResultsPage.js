import React from "react";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import ShoeCard from "./ShoeCard";

function useQuery() {
  const { search } = useLocation();
  return React.useMemo(() => new URLSearchParams(search), [search]);
}

function SearchResultsPage() {
  let query = useQuery();
  const queryString = query.get("query")?.toLowerCase();
  const searchResultsCatalaog = useSelector((state) => {
    return state.shoeCatalog.shoes.filter((shoe) => {
      return shoe.name.toLowerCase().includes(queryString);
    });
  });

  return (
    <div>
      <h2 className="text-center text-2xl m-5">
        Search Results for "{document.querySelector("#turnstoneId").value}"
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mx-10 md:mx-20">
        {searchResultsCatalaog.map((shoe) => (
          <ShoeCard
            key={shoe.id}
            id={shoe.id}
            image={shoe.imageURL}
            name={shoe.name}
            gender={shoe.gender.length > 1 ? "Unisex" : shoe.gender}
            price={shoe.price}
          />
        ))}
      </div>
    </div>
  );
}

export default SearchResultsPage;
