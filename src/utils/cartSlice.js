import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    addItem: (state, action) => {
      // Vanilla Redux(older)
      // DON'T MUTATE THE STATE, returning was mandatory
      // const newState = [...state]
      // return newState

      // Redux Toolkit
      // WE HAVE TO MUTATE THE STATE
      // Redux does all the dirty works behind the scene using a JS library called "immer"

      // mutating the state over here
      state.items.push(action.payload);
    },
    removeItem: (state, action) => {
      state.items.filter((item) => item.id != action.payload.id);
    },

    clearCart: (state, action) => {
      // Either mutate the original state or return a new state
      state.items.length = 0; // originalState=[]

      //   return new state
      // return {items:[]} 
      // (THIS NEW ARRAY [] WILL REPLACE THE ORIGINAL STATE)
    },
  },
});

export const { addItem, removeItem, clearCart } = cartSlice.actions;

export default cartSlice.reducer;
