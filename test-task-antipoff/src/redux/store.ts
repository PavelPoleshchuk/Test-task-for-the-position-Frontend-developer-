import { configureStore } from "@reduxjs/toolkit";
import fetchDataReducer from "./sliceFetch";
import selectedPageReducer from "./sliceSelectedPage";
import formValuesReducer from "./sliceForm";

export const store = configureStore({
  reducer: {
    fetchData: fetchDataReducer,
    selectedPage: selectedPageReducer,
    formValues: formValuesReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
