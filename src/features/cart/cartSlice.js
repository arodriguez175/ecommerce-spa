import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cart: [],
  },
  reducers: {
    addToCart: (state, action) => {
      const newItem = action.payload;

      const existingCartItem = state.cart.find(
        (cartItem) =>
          cartItem.id === newItem.id && cartItem.size === newItem.size
      );
      if (existingCartItem) {
        existingCartItem.quantity += 1;
      } else {
        newItem.quantity = 1;
        state.cart = [...state.cart, newItem];
      }
    },
    removeFromCart: (state, action) => {
      const array = [...state.cart];
      const index = action.payload;
      array.splice(index, 1);
      state.cart = array;
    },
  },
});

export const { addToCart, removeFromCart } = cartSlice.actions;

export default cartSlice.reducer;
