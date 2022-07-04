import { womensShoes } from "../mocks";
import { Link } from "react-router-dom";
import ShoeCard from "./ShoeCard";

function Women() {
  return (
    <div className="women">
      <h2 className="text-center text-2xl">Women's Shoes</h2>
      <div className="grid grid-cols-3 gap-4">
        {womensShoes.map((womensShoes) => (
          <Link to="shoe" key={womensShoes.id}>
            <ShoeCard
              image={womensShoes.imageURL}
              name={womensShoes.name}
              price={womensShoes.price}
            />
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Women;
