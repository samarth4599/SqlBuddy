// themeStore.ts
import { StateCreator } from "zustand";
import { DataSlice } from "./dataSlice";

// Define the store state
export interface ThemeSlice {
  theme: "light" | "dark";
  toggleTheme: () => void;
}

const createThemeSlice: StateCreator<
  ThemeSlice & DataSlice,
  [],
  [],
  ThemeSlice
> = (set) => ({
  theme: "light",
  toggleTheme: () =>
    set((state) => ({ theme: state.theme === "light" ? "dark" : "light" })),
});

export default createThemeSlice;
