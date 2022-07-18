import { configureStore } from "@reduxjs/toolkit";
import shoeCatalogReducer from "./features/shoeCatalog/shoeCatalogSlice";
import cartReducer from "./features/cart/cartSlice";

const store = configureStore({
  reducer: {
    shoeCatalog: shoeCatalogReducer,
    cart: cartReducer,
  },
});

export default store;
