"use client";
import { useBoundStore } from "@/app/store/rootStore";
import { onExecute } from "@/app/utilities/helpers";
import React, { useState } from "react";

const HistoryTable: React.FC = () => {
  const { history, clearHistory, setData, setHistory, setState } =
    useBoundStore((state) => state);
  const [searchTerm, setSearchTerm] = useState("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const filteredHistory = history.filter((item) =>
    item.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="flex flex-col w-20 md:w-full">
      <input
        type="text"
        placeholder="Search history"
        value={searchTerm}
        onChange={handleInputChange}
        className="p-1 mb-2 border border-gray-300 rounded text-xs overflow-scroll"
      />
      <table className="w-full mt-1 overflow-scroll max-h-40 md:max-h-52 flex flex-col">
        <tbody>
          {filteredHistory.map((item) => (
            <tr className=" w-full flex" key={item}>
              <td
                onClick={() => onExecute(item, setData, setState, setHistory)}
                className=" cursor-pointer px-2 py-1 mb-2 font-semibold hover:bg-blue-200 w-full flex justify-center items-center text-sm"
              >
                {item}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <button
        onClick={clearHistory}
        className="p-1 mt-2 border bg-gray-300 hover:bg-gray-500 rounded text-xs w-16"
      >
        Clear
      </button>
    </div>
  );
};

export default HistoryTable;
