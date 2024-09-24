import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cart: [],
  },
  reducers: {
    addToCart: (state, action) => {
      const item = state.cart.find((item) => item.id === action.payload.id);
      if (item) {
        item.qty += 1;
      } else {
        state.cart.push({ ...action.payload, qty: 1 });
        state.cart.map((items) => (items.qty = 1));
      }
    },
    removeFromCart: (state, action) => {
      state.cart = state.cart.filter((items) => items.id !== action.payload);
    },
    addQuantity: (state, action) => {
      state.cart = state.cart.map((pro) =>
        pro.id == action.payload.id
          ? { ...pro, qty: action.payload.newQty }
          : pro
      );
    },
  },
});
export const { addToCart, removeFromCart, addQuantity } = cartSlice.actions;
export default cartSlice.reducer;
