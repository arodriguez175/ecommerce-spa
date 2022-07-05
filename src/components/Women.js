import { womensShoes } from "../mocks";
import ShoeCard from "./ShoeCard";

function Women() {
  return (
    <div className="women">
      <h2 className="text-center text-2xl">Women's Shoes</h2>
      <div className="grid grid-cols-3 gap-4">
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

export default Women;
