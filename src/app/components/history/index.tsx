"use client";
import { useBoundStore } from "@/app/store/rootStore";
import React, { useState } from "react";

const HistoryTable: React.FC = () => {
  const { history } = useBoundStore((state) => state);
  const [searchTerm, setSearchTerm] = useState("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const filteredHistory = history.filter((item) =>
    item.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="flex flex-col w-18">
      <input
        type="text"
        placeholder="Search history"
        value={searchTerm}
        onChange={handleInputChange}
        className="p-1 mb-2 border border-gray-300 rounded"
      />
      <table className="w-full mt-1 overflow-scroll max-h-40 md:max-h-52 flex flex-col">
        <tbody>
          {filteredHistory.map((item) => (
            <tr className=" w-full flex" key={item}>
              <button className="px-2 py-1 mb-2 font-semibold hover:bg-blue-200 w-full flex justify-center items-center">
                {item}
              </button>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default HistoryTable;
