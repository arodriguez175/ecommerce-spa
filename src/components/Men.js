import { mensShoes } from "../mocks";
import Shoe from "./Shoe";
import { Link } from "react-router-dom";

function Men() {
  return (
    <div className="men">
      <h2 className="text-center text-2xl">Men's Shoes</h2>
      <div className="grid grid-cols-3 gap-4">
        {mensShoes.map((mensShoes, index) => (
          <Link to="shoe" key={index}>
            <Shoe
              image={mensShoes.imageURL}
              name={mensShoes.name}
              price={mensShoes.price}
            />
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Men;
