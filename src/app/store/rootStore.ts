import { create } from "zustand";
import createThemeSlice, { ThemeSlice } from "./themeSlice";
import createDataSlice, { DataSlice } from "./dataSlice";

export const useBoundStore = create<ThemeSlice & DataSlice>()((...a) => ({
  ...createThemeSlice(...a),
  ...createDataSlice(...a),
}));
