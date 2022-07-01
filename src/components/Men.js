import { shoes } from "../mocks";
import Shoe from "./Shoe";
import { Link } from "react-router-dom";

function Men() {
  return (
    <div className="men">
      <h2>Men's Shoes</h2>
      {shoes.map((shoes) => (
        <Link to="shoe" className="inline-block w-[300px]">
          <Shoe image={shoes.imageURL} name={shoes.name} price={shoes.price} />
        </Link>
      ))}
    </div>
  );
}

export default Men;
