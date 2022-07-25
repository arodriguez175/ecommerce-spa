import { configureStore } from "@reduxjs/toolkit";
import shoeCatalogReducer from "./features/shoeCatalog/shoeCatalogSlice";
import cartReducer from "./features/cart/cartSlice";
import { loadState, saveState } from "./localStorage";
import { throttle } from "lodash";

const persistedState = loadState();

const store = configureStore({
  reducer: {
    shoeCatalog: shoeCatalogReducer,
    cart: cartReducer,
  },

  preloadedState: persistedState,
});

store.subscribe(
  throttle(() => {
    saveState(store.getState());
  }, 1000)
);

export default store;
