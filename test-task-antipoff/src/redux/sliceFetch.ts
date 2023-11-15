import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { IFetchData } from "../types/typed";

export interface FetchState {
  data: IFetchData;
}

const initialState: FetchState = {
  data: {
    page: 1,
    per_page: 1,
    total: 1,
    total_pages: 1,
    data: [
      {
        id: 0,
        email: "",
        first_name: "",
        last_name: "",
        avatar: "",
      },
    ],
  },
};

export const fetchDataSlice = createSlice({
  name: "fetchDataName",
  initialState,
  reducers: {
    setFetchData: (state, action: PayloadAction<IFetchData>) => {
      state.data = action.payload;
    },
  },
});

export const { setFetchData } = fetchDataSlice.actions;
export default fetchDataSlice.reducer;
