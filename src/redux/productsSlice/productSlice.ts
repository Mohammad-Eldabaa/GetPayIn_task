import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
  productsInitialState,
  productsInitialStateTypes,
  productstypes,
} from "./interfaces";

const productSlice = createSlice({
  name: "products",
  initialState: productsInitialState,
  reducers: {
    setProducts: (state, action: PayloadAction<productstypes[]>) => {
      state.products = action.payload;
    },
  },
});

export const { setProducts } = productSlice.actions;
export default productSlice.reducer;
