import { createSlice } from "@reduxjs/toolkit";

const ProPagenationSlice = createSlice({
  name: "product",
  initialState: {
    products: [],
    currentPage: 1,
    itemsPerPage: 12,
  },
  reducers: {
    setProduct: (state, action) => {
      state.products = action.payload;
    },
    setCurrentPage: (state, action) => {
      state.currentPage = action.payload;
    },
  },
});
export const { setProduct, setCurrentPage } = ProPagenationSlice.actions;
export default ProPagenationSlice.reducer;
