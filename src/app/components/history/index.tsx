"use client";
import React, { memo, useState, ChangeEvent } from "react";
import { useBoundStore } from "@/app/store/rootStore";
import { onExecute } from "@/app/utilities/helpers";

/**
 * HistoryTable component displays a table of search history
 * with a search input and a clear button.
 */
const HistoryTable: React.FC = () => {
  const { history, clearHistory, setData, setHistory, setState } =
    useBoundStore((state) => state);
  const [searchTerm, setSearchTerm] = useState("");

  /**
   * Handles the change event of the search input.
   * @param e - The change event
   */
  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  /**
   * Filters the history based on the search term.
   */
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
        className="p-1 mb-2 border border-gray-200 bg-slate-300 dark:bg-stone-600 text-stone-900 dark:text-slate-200 dark:border-gray-600 rounded text-xs overflow-scroll"
      />
      <table className="w-full mt-1 overflow-scroll max-h-40 md:max-h-52 flex flex-col">
        <tbody>
          {filteredHistory.map((item) => (
            <tr className=" w-full flex" key={item}>
              <td
                onClick={() => onExecute(item, setData, setState, setHistory)}
                className=" cursor-pointer px-2 py-1 mb-2 font-semibold text-stone-900 dark:text-slate-200 dark:hover:bg-gray-600 hover:bg-slate-200 w-full flex justify-center items-center text-sm"
              >
                {item}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <button
        onClick={clearHistory}
        className="p-1 mt-2 border bg-slate-300 dark:bg-stone-600 hover:bg-slate-500 dark:hover:bg-slate-800 text-stone-700 dark:text-slate-300 rounded text-xs w-16"
      >
        Clear
      </button>
    </div>
  );
};

export default memo(HistoryTable);
