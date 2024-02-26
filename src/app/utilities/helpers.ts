import { readString } from "react-papaparse";
import { TScreenState, TTableData } from "../constants/interfaces";
import { csvArray, csvLink } from "../constants/constants";
import { callApi } from "./api";
import { Bounce, toast } from "react-toastify";

export const csvConverter = (
  data: any,
  setData: (data: TTableData) => void
) => {
  const encodedData = data.content.replace("\n", "");
  const stringData = atob(encodedData);
  readString(stringData, {
    worker: true,
    complete: (results: any) => setData(results.data),
  });
};

export const findCSVTable = (query: string): string | null => {
  // Convert the query to lowercase for case-insensitive matching
  const lowerCaseQuery = query.toLowerCase();

  // Find the first table name from csvArray present in the query
  const tableName = csvArray.find((tableName) =>
    lowerCaseQuery.includes(tableName.toLowerCase())
  );

  // Return the matching table name or null if not found
  return tableName ?? null;
};

export const onExecute = async (
  value: string,
  setData: (data: TTableData) => void,
  setState: (state: TScreenState) => void,
  setHistory: (text: string) => void
) => {
  try {
    const table = findCSVTable(value);
    if (table) {
      setState("loading");
      const getCSV = await callApi(csvLink(table));
      csvConverter(getCSV, setData);
      setHistory(value);
      setState("success");
    } else {
      throw new Error("Invalid Table Name");
    }
  } catch (e: any) {
    toast(e.message ?? "Something went wrong", {
      position: "top-right",
      type: "error",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Bounce,
    });
    setState("error");
    setData([]);
  }
};
