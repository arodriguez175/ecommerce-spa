import { createSlice } from "@reduxjs/toolkit";

export const saveItemSlice = createSlice({
  name: "saveItem",
  initialState: {
    savedItems: [],
  },

  reducers: {
    addToSavedItems: (state, action) => {
      const newItem = action.payload;

      const existingSavedItem = state.savedItems.find(
        (savedItem) => savedItem.id === newItem.id
      );
      if (existingSavedItem) {
        existingSavedItem.quantity += 1;
      } else {
        newItem.quantity = 1;
        state.savedItems = [...state.savedItems, newItem];
      }
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
