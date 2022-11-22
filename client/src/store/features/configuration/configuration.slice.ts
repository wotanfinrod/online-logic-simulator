import { createAction, createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface Configuration {
  name: string;
  version: number;
  description: string;
}

interface ConfigurationState {
  configuration: Configuration;
}

const initialState: ConfigurationState = {
  configuration: {
    name: "React Template",
    version: 1.0,
    description: "React Template",
  },
};
export const submitTotp = createAction<string>("product/fetchProducts");

const configurationSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    setConfiguration(
      state: ConfigurationState,
      action: PayloadAction<Configuration>
    ) {
      state.configuration = action.payload;
    },
  },
});

export const { setConfiguration } = configurationSlice.actions;

export default configurationSlice.reducer;
