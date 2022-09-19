import React from "react";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import ShoeCard from "./ShoeCard";

function useQuery() {
  const { search } = useLocation();
  console.log(search);
  return React.useMemo(() => new URLSearchParams(search), [search]);
}

function SearchResultsPage() {
  let query = useQuery();
  console.log(query);
  const searchResultsCatalaog = useSelector((state) => {
    return state.shoeCatalog.shoes.filter((shoe) => {
      return shoe.name.includes(query.get("query"));
    });
  });

  return (
    <div>
      {searchResultsCatalaog.map((shoe) => (
        <ShoeCard
          key={shoe.id}
          id={shoe.id}
          image={shoe.imageURL}
          name={shoe.name}
          gender={shoe.gender}
          price={shoe.price}
        />
      ))}
    </div>
  );
}

export default SearchResultsPage;
