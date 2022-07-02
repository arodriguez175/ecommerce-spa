import { womensShoes } from "../mocks";
import { Link } from "react-router-dom";
import Shoe from "./Shoe";

function Women() {
  return (
    <div className="women">
      <h2>Women's Shoes</h2>
      {womensShoes.map((womensShoes) => (
        <Link to="shoe" className="inline-block w-[300px]">
          <Shoe
            image={womensShoes.imageURL}
            name={womensShoes.name}
            price={womensShoes.price}
          />
        </Link>
      ))}
    </div>
  );
}

export default Women;
