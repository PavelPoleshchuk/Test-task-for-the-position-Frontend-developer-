import { configureStore } from "@reduxjs/toolkit";
import fetchDataReducer from "./sliceFetch";
import selectedPageReducer from "./sliceSelectedPage";
import tokenInStorageReducer from "./sliceToken";

export const store = configureStore({
  reducer: {
    fetchData: fetchDataReducer,
    selectedPage: selectedPageReducer,
    tokenAndForm: tokenInStorageReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
