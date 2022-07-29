import { useSelector } from "react-redux";
import CartShoe from "./CartShoe";

function Cart() {
  const bag = useSelector((state) => {
    return state.cart.cart;
  });

  return (
    <div className="cart">
      {bag.length ? (
        <div>
          <h2 className="m-5">
            <span className="text-2xl">Bag</span>
            <span>{` (${bag.length} items)`}</span>
          </h2>

          <div className="grid grid-cols-4 gap-3">
            <div className="col-span-3">
              {bag.map((shoe, index) => {
                return <CartShoe id={shoe.id} size={shoe.size} key={index} />;
              })}
            </div>

            <div className="col-span-1">
              <h2 className="text-2xl mb-3">Order Summary</h2>
              <p>Subtotal {}</p>
              <p>Estimated Tax ${0}.00</p>
              <span>Estimated Shipping</span>
              <span className="free"> Free</span>
              <p>Estimated Total {}</p>
              <button>Checkout</button>
            </div>
          </div>
        </div>
      ) : (
        <p className="text-center m-10 text-[30px]">Sorry, bag is empty.</p>
      )}
    </div>
  );
}
export default Cart;
