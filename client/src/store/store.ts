import { configureStore } from "@reduxjs/toolkit";
import productReducer from "@/store/features/product/product.slice";
import configurationReducer from "@/store/features/configuration/configuration.slice";
import userReducer from "@/store/features/users/user.slice";

export const store = configureStore({
  reducer: {
    product: productReducer,
    configuration: configurationReducer,
    user: userReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
