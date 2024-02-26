// Only one screen is added for now but we can add more screens in the future
"use client";
import Header from "@/app/components/header";
import LayoutBox from "@/app/components/layoutBox";
import { useBoundStore } from "@/app/store/rootStore";
import React, { useEffect } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const HomeScreen: React.FC = () => {
  const { theme } = useBoundStore((state) => state);
  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);
  return (
    <div className=" flex flex-col flex-grow">
      <Header />
      <LayoutBox />
      <ToastContainer />
    </div>
  );
};

export default HomeScreen;
