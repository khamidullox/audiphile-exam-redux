import { configureStore } from "@reduxjs/toolkit";
import porductReducer from "./ProductSlice";
export const store = configureStore({
  reducer: { product: porductReducer },
});
