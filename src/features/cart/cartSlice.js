import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cart: [],
  },
  reducers: {
    addToCart: (state, action) => {
      const newItem = action.payload;
      // action.payload is {id: <number>, size: <number> }
      // 1. is there an item with the same id and size in cart? if yes, increase quantity by 1. if not, do a similar thing as before
      const existingCartItem = state.cart.find(
        (cartItem) =>
          cartItem.id === newItem.id && cartItem.size === newItem.size
      );
      if (existingCartItem) {
        existingCartItem.quantity += 1;
        // TODO: figure out if state gets updated or we need to do something extra to update state
      } else {
        newItem.quantity = 1; // newItem = { id: 1, size: 10, quantity: 1}
        state.cart = [...state.cart, newItem];
      }
    },
  },
});

export const { addToCart } = cartSlice.actions;

export default cartSlice.reducer;
