import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
  categoriesTypes,
  productsInitialState,
  productstypes,
} from "./interfaces";

const productSlice = createSlice({
  name: "products",
  initialState: productsInitialState,
  reducers: {
    setProducts: (state, action: PayloadAction<productstypes[]>) => {
      state.products = action.payload;
    },
    setCategories: (state, action: PayloadAction<categoriesTypes[]>) => {
      state.categories = action.payload;
    },
    clearProductsAndCategroy: (
      state,
      action: PayloadAction<productstypes[]>
    ) => {
      state.categories = null;
      state.products = null;
    },
  },
});

export const { setProducts, setCategories, clearProductsAndCategroy } =
  productSlice.actions;
export default productSlice.reducer;
