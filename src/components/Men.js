import { shoes } from "../mocks";
import Shoe from "./Shoe";

function Men() {
  return (
    <div className="men">
      <h2>Men's Shoes</h2>
      {shoes.map((shoes) => (
        <Shoe image={shoes.imageURL} name={shoes.name} price={shoes.price} />
      ))}
    </div>
  );
}

export default Men;
