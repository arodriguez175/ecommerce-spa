import { womensShoes } from "../mocks";
import { Link } from "react-router-dom";
import Shoe from "./Shoe";

function Women() {
  return (
    <div className="women">
      <h2 className="text-center text-2xl">Women's Shoes</h2>
      <div className="grid grid-cols-3 gap-4">
        {womensShoes.map((womensShoes, index) => (
          <Link to="shoe" key={index}>
            <Shoe
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
