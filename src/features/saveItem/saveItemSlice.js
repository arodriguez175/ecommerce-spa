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
    removeSavedItem: (state, action) => {
      const array = [...state.savedItems];
      const index = action.payload;
      array.splice(index, 1);
      state.savedItems = array;
    },
  },
});

export const { addToSavedItems, removeSavedItem } = saveItemSlice.actions;

export default saveItemSlice.reducer;
