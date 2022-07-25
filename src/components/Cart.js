import { useSelector } from "react-redux";
import CartShoe from "./CartShoe";

function Cart() {
  const bag = useSelector((state) => {
    return state.cart.cart;
  });

  return (
    <div className="cart flex">
      <h2 className="m-5">
        <span className="text-2xl">Bag</span>
        <span>{` (${bag.length} items)`}</span>
      </h2>

      {bag.length ? (
        <div>
          {bag.map((shoe, index) => {
            return <CartShoe id={shoe.id} size={shoe.size} key={index} />;
          })}

          <div>
            <h2 className="text-2xl m-5">Order Summary</h2>
            {/* numbers */}
          </div>
        </div>
      ) : (
        <p>Sorry, cart is empty.</p>
      )}
    </div>
  );
}
export default Cart;
