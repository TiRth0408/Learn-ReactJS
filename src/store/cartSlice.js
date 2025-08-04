import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cartItems: [],
  },
  reducers: {
    addToCart: (state, action) => {
      state.cartItems.push(action.payload);
    },
    removeItemById: (state, action) => {
      state.cartItems = state.cartItems.filter(item => item.id !== action.payload);
    },
    clearItems: (state) => {
      state.cartItems = [];
    }
  }
});

// ✅ Export these
export const { addToCart, removeItemById, clearItems } = cartSlice.actions;
export default cartSlice.reducer;