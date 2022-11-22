import { configureStore } from "@reduxjs/toolkit";
import productReducer from "@/store/features/product/product.slice";
import configurationReducer from "@/store/features/configuration/configuration.slice";

export const store = configureStore({
  reducer: {
    product: productReducer,
    configuration: configurationReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
