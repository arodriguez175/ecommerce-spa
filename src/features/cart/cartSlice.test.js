import reducer, { addToCart } from "./cartSlice";

describe("cartSlice", () => {
  test("add item to cart", () => {
    const previousState = {
      cart: [],
    };

    const shoe = {
      id: 1,
      size: 11,
    };

    expect(reducer(previousState, addToCart(shoe))).toEqual({
      cart: [shoe],
    });
  });
});
