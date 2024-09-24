import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./slices/cartSlice";
import commentSlice from "./slices/commentSlice";
import ProPagenationSlice from "./slices/ProPagenationSlice";
import AboutPro from "../components/AboutPro";
import AboutProSlice from "./slices/AboutPro"
const store = configureStore({
  reducer: {
    cart: cartSlice,
    comment: commentSlice,
    product: ProPagenationSlice,
    AboutPro: AboutProSlice,
  },
});
export default store;
