import { configureStore } from "@reduxjs/toolkit";
import shoeCatalogReducer from "./features/shoeCatalog/shoeCatalogSlice";
import cartReducer from "./features/cart/cartSlice";
import saveItemReducer from "./features/saveItem/saveItemSlice";
import { loadState, saveState } from "./localStorage";
import { throttle } from "lodash";

const persistedState = loadState();

const store = configureStore({
  /* Connecting the slices to the main store, 
  so they're available in the whole application whenever needed */
  reducer: {
    shoeCatalog: shoeCatalogReducer,
    cart: cartReducer,
    saveItem: saveItemReducer,
  },

  preloadedState: persistedState, // Saved state
});

/* The saveState function is inside the store.subscribe listener 
so it's called everytime there is a change to the store. */

/* Throttle is allowing a wait time of 1 second before allowing 
the saveState function available to run again */

/* Pass the current state of the store into saveState */
store.subscribe(
  throttle(() => {
    saveState(store.getState());
  }, 1000)
);

export default store;
