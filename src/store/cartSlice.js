import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cartItems: [],
  },
  reducers: {
    addItems: (state, action) => {
      const item = action.payload;
      const existingItem = state.cartItems.find(i => i.id === item.id);

      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.cartItems.push({ ...item, quantity: 1 });
      }
    },
    removeItemById: (state, action) => {
      const id = action.payload;
      const existingItem = state.cartItems.find(i => i.id === id);

      if (existingItem) {
        if (existingItem.quantity > 1) {
          existingItem.quantity -= 1; // ✅ Reduce quantity
        } else {
          state.cartItems = state.cartItems.filter(i => i.id !== id); // ✅ Remove only if quantity is 1
        }
      }
    },
    increaseQuantity: (state, action) => {
      const id = action.payload;
      const item = state.cartItems.find(i => i.id === id);
      if (item) {
        item.quantity += 1;
      }
    },
    clearItems: (state) => {
      state.cartItems = [];
    },
  },
});

export const { addItems, removeItemById, increaseQuantity, clearItems } = cartSlice.actions;
export default cartSlice.reducer;