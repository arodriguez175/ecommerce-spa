import { useSelector } from "react-redux";
import CartShoe from "./CartShoe";

function Cart() {
  const bag = useSelector((state) => {
    return state.cart.cart;
  });

  return (
    <div className="cart">
      <h2 className="m-5">
        <span className="text-2xl">Bag</span>
        <span>{` (${bag.length} items)`}</span>
      </h2>

      <div className="grid grid-cols-4 gap-3">
        {bag.length ? (
          <div className="col-span-3">
            {bag.map((shoe, index) => {
              return <CartShoe id={shoe.id} size={shoe.size} key={index} />;
            })}
          </div>
        ) : (
          <p>Sorry, cart is empty.</p>
        )}
        <div className="col-span-1">
          <h2 className="text-2xl mb-3">Order Summary</h2>
          {/* numbers */}
        </div>
      </div>
    </div>
  );
}
export default Cart;
