import { createSlice } from "@reduxjs/toolkit";

export const saveItemSlice = createSlice({
  name: "saveItem",
  initialState: {
    savedItems: [],
  },

  reducers: {
    addToSavedItems: (state, action) => {
      state.savedItems = [...state.savedItems, action.payload];
    },
  },
});

export const { addToSavedItems } = saveItemSlice.actions;

export default saveItemSlice.reducer;
