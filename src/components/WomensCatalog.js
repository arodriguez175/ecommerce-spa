import { useSelector } from "react-redux";
import ShoeCard from "./ShoeCard";

function WomensCatalog() {
  const womensShoes = useSelector((state) => {
    return state.shoeCatalog.shoes.filter((shoe) =>
      shoe.gender.includes("Women")
    );
  });

  return (
    <div className="women">
      <h2 className="text-center text-2xl m-5">Women's Shoes</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mx-20">
        {womensShoes.map((shoe) => (
          <ShoeCard
            key={shoe.id}
            id={shoe.id}
            image={shoe.imageURL}
            name={shoe.name}
            price={shoe.price}
          />
        ))}
      </div>
    </div>
  );
}

export default WomensCatalog;
