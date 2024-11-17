import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface CustomizationState {
  size: number;
  fontSize: string;
  color: string;
  letterSpacing: string;
  fontFamily: string;
}

interface IcustomizationSlice {
  customize: CustomizationState;
  isSidebarCollapse: boolean;
}

const initialState: IcustomizationSlice = {
  customize: {
    color: "",
    fontFamily: "Arial",
    fontSize: "16",
    letterSpacing: "",
    size: 100,
  },
  isSidebarCollapse: false,
};

const customizationSlice = createSlice({
  name: "customization",
  initialState,
  reducers: {
    setSize: (state, action: PayloadAction<number>) => {
      state.customize.size = action.payload;
    },
    toggleSidebar: (state) => {
      state.isSidebarCollapse = !state.isSidebarCollapse;
    },
  },
});

export const { setSize, toggleSidebar } = customizationSlice.actions;

export default customizationSlice.reducer;
