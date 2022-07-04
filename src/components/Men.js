import { mensShoes } from "../mocks";
import ShoeCard from "./ShoeCard";
import { Outlet } from "react-router-dom";

function Men() {
  return (
    <div className="men">
      <h2 className="text-center text-2xl">Men's Shoes</h2>
      <div className="grid grid-cols-3 gap-4">
        {mensShoes.map((shoe) => (
          <ShoeCard
            id={shoe.id}
            image={shoe.imageURL}
            name={shoe.name}
            price={shoe.price}
          />
        ))}
      </div>
      <Outlet />
    </div>
  );
}

export default Men;
