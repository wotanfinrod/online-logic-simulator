import { createAction, createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface Product {
  name: string;
  price: number;
  description: string;
}

interface ProductState {
  products: Product[];
  categoryFilter: string;
}

const initialState: ProductState = {
  products: [],
  categoryFilter: "",
};
export const submitTotp = createAction<string>("product/fetchProducts");

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    setProducts(state: ProductState, action: PayloadAction<Product[]>) {
      state.products = action.payload;
    },
  },
});

export const { setProducts } = productSlice.actions;

export default productSlice.reducer;
