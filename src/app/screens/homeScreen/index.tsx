// Only one screen is added for now but we can add more screens in the future
"use client";
import Header from "@/app/components/header";
import LayoutBox from "@/app/components/layoutBox";
import React from "react";

const HomeScreen: React.FC = () => {
  return (
    <div className=" flex flex-col flex-grow">
      <Header />
      <LayoutBox />
    </div>
  );
};

export default HomeScreen;
