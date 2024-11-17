import { createSlice } from "@reduxjs/toolkit";

interface IheaderContolPanelState {
  isCollapsed: boolean;
  isSearchBarOpen: boolean;
}

const initialState: IheaderContolPanelState = {
  isCollapsed: false,
  isSearchBarOpen: false,
};

const headerContolPanel = createSlice({
  name: "headerControlPanel",
  initialState,
  reducers: {
    toggleCollapsed: (state) => {
      state.isCollapsed = !state.isCollapsed;
    },
    toggleSearchBar: (state) => {
      state.isSearchBarOpen = !state.isSearchBarOpen;
    },
  },
});

export const { toggleCollapsed, toggleSearchBar } = headerContolPanel.actions;

export default headerContolPanel.reducer;
