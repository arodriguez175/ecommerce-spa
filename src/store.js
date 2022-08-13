import { configureStore } from "@reduxjs/toolkit";
import shoeCatalogReducer from "./features/shoeCatalog/shoeCatalogSlice";
import cartReducer from "./features/cart/cartSlice";
import saveItemReducer from "./features/saveItem/saveItemSlice";
import { loadState, saveState } from "./localStorage";
import { throttle } from "lodash";

const persistedState = loadState();

const store = configureStore({
  reducer: {
    shoeCatalog: shoeCatalogReducer,
    cart: cartReducer,
    saveItem: saveItemReducer,
  },

  preloadedState: persistedState,
});

store.subscribe(
  throttle(() => {
    saveState(store.getState());
  }, 1000)
);

export default store;
