import { createSlice } from "@reduxjs/toolkit";

interface ItemplateStore {}

const initialState: ItemplateStore = {};

const templateStore = createSlice({
  name: "template",
  initialState,
  reducers: {},
});

export const {} = templateStore.actions;

export default templateStore.reducer;
