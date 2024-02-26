import { TScreenState } from "../constants/interfaces";

export const callApi = async (
  url: string,
  setState: (state: TScreenState) => void
) => {
  try {
    setState("loading");
    const res = await fetch(url, {
      headers: {
        Accept: "application/json",
      },
    });

    if (res.ok) {
      const data = await res.json();
      setState("success");
      return data;
    } else {
      setState("error");
    }
  } catch (err: any) {
    setState("error");
  }
};
