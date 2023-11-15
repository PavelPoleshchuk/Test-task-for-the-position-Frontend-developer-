import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { FormValues } from "../components/Form";

const initialState: FormValues = {
  name: "",
  email: "",
  password1: "",
  password2: "",
};

export const formValuesSlice = createSlice({
  name: "FormValuesName",
  initialState,
  reducers: {
    setFormValues: (state, action: PayloadAction<FormValues>) => {
      state = action.payload;
    },
  },
});

export const { setFormValues } = formValuesSlice.actions;
export default formValuesSlice.reducer;
