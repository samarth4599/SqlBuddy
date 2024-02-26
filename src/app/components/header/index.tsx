"use client";
import React, { memo } from "react";
import { useBoundStore } from "@/app/store/rootStore";

/**
 * Header component for the SQL Buddy application.
 * It displays the application title and a theme toggle button.
 */
const Header: React.FC = () => {
  const { toggleTheme, theme } = useBoundStore((state) => state);

  /**
   * Toggles the theme between light and dark.
   */
  const handleThemeToggle = () => {
    toggleTheme();
  };

  return (
    <header
      className={`bg-gradient-to-r dark:from-gray-500 dark:to-stone-900 from-slate-50 to-gray-400 py-4`}
    >
      <div className="container mx-auto">
        <h1
          className={`dark:text-slate-200 text-gray-700 text-4xl font-bold tracking-wide text-center`}
        >
          SQL Buddy
        </h1>
      </div>
      <button
        onClick={handleThemeToggle}
        className="absolute top-4 right-6 bg-black rounded-full w-9 h-9 text-2xl"
      >
        {theme === "dark" ? "🌝" : "🌙"}
      </button>
    </header>
  );
};

export default memo(Header);
