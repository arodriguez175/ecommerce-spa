import { womensShoes } from "../mocks";
import ShoeCard from "./ShoeCard";

function WomensCatalog() {
  return (
    <div className="women">
      <h2 className="text-center text-2xl m-5">Women's Shoes</h2>
      <div className="grid grid-cols-3 gap-10 mx-20">
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
