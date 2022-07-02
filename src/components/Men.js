import { mensShoes } from "../mocks";
import Shoe from "./Shoe";
import { Link } from "react-router-dom";

function Men() {
  return (
    <div className="men">
      <h2>Men's Shoes</h2>
      {mensShoes.map((mensShoes) => (
        <Link to="shoe" className="inline-block w-[300px]">
          <Shoe
            image={mensShoes.imageURL}
            name={mensShoes.name}
            price={mensShoes.price}
          />
        </Link>
      ))}
    </div>
  );
}

export default Men;
