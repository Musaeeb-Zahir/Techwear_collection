import { createSlice } from "@reduxjs/toolkit";

const commentSlice = createSlice({
  name: "comment",
  initialState: {
    comment: [],
  },
  reducers: {
    addComment: (state, action) => {
      state.comment.push(action.payload)
    },
  },
});
export const { addComment } = commentSlice.actions;
export default commentSlice.reducer;
