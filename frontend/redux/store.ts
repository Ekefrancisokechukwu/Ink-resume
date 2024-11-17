import { configureStore } from "@reduxjs/toolkit";
import headerControlPanelReducer from "./features/headercontrolPanel/headerControlSlice";
import templateReducer from "./features/template/templatesSlice";
import customizationReducer from "./features/customize/customizeSlice";
import { useDispatch } from "react-redux";

const store = configureStore({
  reducer: {
    headerPanel: headerControlPanelReducer,
    template: templateReducer,
    customization: customizationReducer,
  },
});

export type AppDispatch = typeof store.dispatch;

export type RootState = ReturnType<typeof store.getState>;

export const useAppDispatch = () => useDispatch<AppDispatch>();

export default store;
