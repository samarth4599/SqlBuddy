"use client";
import React from "react";
import SqlEditor from "../sqlEditor";
import Table from "../table";
import HistoryTable from "../history";

const LayoutBox: React.FC = () => {
  return (
    <div className="flex flex-col-reverse md:flex-row flex-grow p-3 gap-3">
      <div className="flex flex-grow flex-col w-full md:w-7/12 ">
        <Table />
      </div>
      <div className="flex flex-grow md:flex-col w-full md:w-5/12 gap-5">
        <SqlEditor />
        <HistoryTable />
      </div>
    </div>
  );
};

export default LayoutBox;
