import { useSelector } from "react-redux";
import CartShoe from "./CartShoe";

function Cart() {
  const bag = useSelector((state) => {
    return state.cart.cart;
  });

  const numberFormatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  });

  const shoeCatalog = useSelector((state) => state.shoeCatalog.shoes);

  let total = 0;
  for (let shoeItem of bag) {
    const shoeFromCatalog = shoeCatalog.find((item) => item.id === shoeItem.id);
    total += shoeFromCatalog.price * shoeItem.quantity;
  }

  return (
    <div className="cart">
      {bag.length ? (
        <div>
          <h2 className="m-5">
            <span className="text-2xl">Bag</span>
            <span>{` (${bag.length} items)`}</span>
          </h2>

          <div className="grid grid-cols-3 gap-3">
            <div className="col-span-2">
              {bag.map((shoe, index) => {
                return (
                  <CartShoe
                    id={shoe.id}
                    size={shoe.size}
                    key={index}
                    qty={shoe.quantity}
                  />
                );
              })}
            </div>

            <div className="col-span-1 mx-auto leading-loose">
              <h2 className="text-2xl mb-3">Order Summary</h2>
              <div className="orderSummary">
                <p>
                  Subtotal <span>{numberFormatter.format(total)}</span>
                </p>
                <p>
                  Estimated Tax <span>{numberFormatter.format(0)}</span>
                </p>
                <p>
                  Estimated Shipping<span className="free">Free</span>
                </p>

                <p className="font-semibold">
                  Estimated Total <span>{numberFormatter.format(total)}</span>
                </p>
              </div>

              <button
                className="bg-shoe-primary 
                hover:bg-shoe-hover
                text-shoe-primary-text
                w-[300px]
                p-[10px]
                rounded
                mt-3"
              >
                Checkout
              </button>
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
