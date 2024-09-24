import { createSlice } from "@reduxjs/toolkit";

const AboutProSlice = createSlice({
  name: "AboutPro",
  initialState: {
    pro: [],
  },
  reducers: {
    AddPro: (state, action) => {
      state.pro.unshift(action.payload);
    },
  },
});
export const { AddPro } = AboutProSlice.actions;
export default AboutProSlice.reducer;
