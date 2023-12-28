import { createSlice } from "@reduxjs/toolkit";

const initailState = {};

const userSlice = createSlice({
  name: "user",
  initialState: initailState,
  reducers: {},
});

export const {} = userSlice.actions;
export default userSlice.reducer;
