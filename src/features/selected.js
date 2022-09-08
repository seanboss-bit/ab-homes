import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  select: [],
};

const selectedSlice = createSlice({
  name: "select",
  initialState,
  reducers: {
    addUp: (state, action) => {
      state.select = action.payload;
    },
    done: (state) => {
      state.select = [];
    },
  },
});

export const { addUp, done } = selectedSlice.actions;
export default selectedSlice.reducer;
