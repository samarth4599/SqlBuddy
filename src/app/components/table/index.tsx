"use client";
import React, { memo, useMemo, useState } from "react";
import { useBoundStore } from "@/app/store/rootStore";
import LoadingAnimation from "../loader";

const Table: React.FC = () => {
  // Get data and state from the store
  const { data, state } = useBoundStore((state) => state);
  const [visibleRows, setVisibleRows] = useState<number>(15);

  // Loading animation component
  const loading = useMemo(
    () => (
      <div className="flex justify-center items-center h-full">
        <LoadingAnimation />
      </div>
    ),
    []
  );

  // No data message component
  const noData = useMemo(
    () => (
      <div className="flex justify-center items-center h-full">
        <span className="text-3xl text-gray-400 font-semibold">
          No data to display
        </span>
      </div>
    ),
    []
  );

  // Table component
  const table = useMemo(
    () => (
      <table className="min-w-full divide-y dark:divide-gray-600 divide-gray-200 bg-slate-200 dark:bg-stone-800">
        <thead>
          <tr>
            {data.at(0)?.map((header, index) => (
              <th
                key={index}
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-800 dark:text-gray-300 uppercase tracking-wider"
              >
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="bg-slate-300 dark:bg-stone-900 divide-y divide-gray-200 dark:divide-gray-800">
          {data.slice(1, visibleRows + 1).map((row, rowIndex) => (
            <tr key={rowIndex}>
              {row.map((cell, cellIndex) => (
                <td
                  key={cellIndex}
                  className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-300"
                >
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    ),
    [data, visibleRows]
  );

  // Determine the content to render based on the state
  const content = useMemo(() => {
    switch (state) {
      case "loading":
        return loading;
      case "error":
      case "success":
        return data.length === 0 ? noData : table;
      default:
        return null;
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [state, data, visibleRows]);

  // Load more rows
  const loadMore = () => {
    setVisibleRows((prev) => Math.min(prev + 15, data.length));
  };

  const allDataRendered = visibleRows >= data.length;

  return (
    <div>
      {/* Scrollable container */}
      <div className="overflow-scroll h-96 md:h-[500px] rounded-md border-2 dark:border-gray-600 border-gray-300 bg-slate-300 dark:bg-stone-800">
        {content}
      </div>
      {/* Load more button */}
      <button
        disabled={allDataRendered}
        onClick={loadMore}
        className={`${
          allDataRendered ? "bg-gray-500" : "bg-blue-500 hover:bg-blue-700"
        } text-white px-2 py-1 rounded-md mt-3 text-sm`}
      >
        Load More
      </button>
    </div>
  );
};

export default memo(Table);
