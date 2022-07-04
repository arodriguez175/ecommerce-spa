import { configureStore } from "@reduxjs/toolkit";
import shoeCatalogReducer from "./features/shoeCatalog/shoeCatalogSlice";

const store = configureStore({
  reducer: {
    shoeCatalog: shoeCatalogReducer,
  },
});

export default store;
