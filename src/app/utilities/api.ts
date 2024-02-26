export const callApi = async (url: string) => {
  try {
    const res = await fetch(url, {
      headers: {
        Accept: "application/json",
      },
    });

    if (res.ok) {
      const data = await res.json();
      return data;
    } else {
      throw new Error("Network response was not ok.");
    }
  } catch (err: any) {
    throw new Error(err.message);
  }
};
