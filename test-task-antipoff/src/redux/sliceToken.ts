import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface ITokenFormState {
  tokenInStorage: boolean;
  formIsOpen: boolean;
}

const initialState: ITokenFormState = {
  tokenInStorage: false,
  formIsOpen: false,
};

export const TokenInStorageSlice = createSlice({
  name: "Token|FormName",
  initialState,
  reducers: {
    setTokenInStorage: (state, action: PayloadAction<boolean>) => {
      state.tokenInStorage = action.payload;
    },
    setFormIsOpen: (state, action: PayloadAction<boolean>) => {
      state.formIsOpen = action.payload;
    },
  },
});

export const { setTokenInStorage, setFormIsOpen } = TokenInStorageSlice.actions;
export default TokenInStorageSlice.reducer;
