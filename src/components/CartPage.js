import { useSelector } from "react-redux";
import CartShoeCard from "./CartShoeCard";

function CartPage() {
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
    <div className="cart mx-[1rem] lg:mx-[5rem]">
      {bag.length ? (
        <div>
          <h2 className="md:mt-5 mb-5 md:mr-5 text-center md:text-left">
            <span className="text-2xl">Bag</span>
            <span>{` (${bag
              .map((item) => item.quantity)
              .reduce((first, last) => first + last, 0)} items)`}</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            <div className="md:col-span-2">
              {bag.map((shoe, index) => {
                return (
                  <CartShoeCard
                    id={shoe.id}
                    size={shoe.size}
                    key={index}
                    qty={shoe.quantity}
                    index={index}
                  />
                );
              })}
            </div>

            <div className="col-span-1 md:mx-auto leading-loose">
              <h2 className="text-2xl mb-3 text-center md:text-left">
                Order Summary
              </h2>
              <div className="[&>*>*]:float-right text-[10pt] lg:text-[12pt]">
                <p>
                  Subtotal <span>{numberFormatter.format(total)}</span>
                </p>
                <p>
                  Estimated Tax <span>{numberFormatter.format(0)}</span>
                </p>
                <p>
                  Estimated Shipping<span className="text-green">Free</span>
                </p>

                <p className="font-semibold">
                  Estimated Total <span>{numberFormatter.format(total)}</span>
                </p>
              </div>

              <button className="bg-primary hover:bg-darkgray text-secondary w-full lg:w-[300px] p-[10px] rounded mt-3">
                Checkout
              </button>
            </div>
          </div>
        </div>
      ) : (
        <p className="text-center m-10 text-[30px]">
          There are no items in your bag.
        </p>
      )}
    </div>
  );
}
export default CartPage;
