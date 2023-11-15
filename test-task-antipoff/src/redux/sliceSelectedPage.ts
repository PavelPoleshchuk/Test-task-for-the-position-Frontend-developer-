import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface SelectedPageState {
  page: number;
}

const initialState: SelectedPageState = {
  page: 1,
};

export const SelectedPageSlice = createSlice({
  name: "selectedPageName",
  initialState,
  reducers: {
    setSelectedPage: (state, action: PayloadAction<number>) => {
      state.page = action.payload;
    },
  },
});

export const { setSelectedPage } = SelectedPageSlice.actions;
export default SelectedPageSlice.reducer;
