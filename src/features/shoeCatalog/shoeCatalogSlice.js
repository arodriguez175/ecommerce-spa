import { createSlice } from "@reduxjs/toolkit";
import { mensShoes, womensShoes } from "../../mocks";

export const shoeCatalogSlice = createSlice({
  name: "shoeCatalog",
  initialState: {
    shoes: [...mensShoes, ...womensShoes],
  },
  reducers: {},
});

export default shoeCatalogSlice.reducer;
