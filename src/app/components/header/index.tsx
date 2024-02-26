"use client";
import { useBoundStore } from "@/app/store/rootStore";
import React, { memo } from "react";

const Header: React.FC = () => {
  const { toggleTheme, theme } = useBoundStore((state) => state);
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
      {theme === "dark" ? (
        <button
          onClick={toggleTheme}
          className="absolute top-4 right-6 bg-black rounded-full w-9 h-9 text-2xl"
        >
          🌝
        </button>
      ) : (
        <button
          onClick={toggleTheme}
          className="absolute top-4 right-6 bg-black w-9 h-9 rounded-full text-2xl"
        >
          🌙
        </button>
      )}
    </header>
  );
};

export default memo(Header);
