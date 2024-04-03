// src/api.ts
const API_KEY = "RIBXT3XYLI69PC0Q";
const API_URL = `https://www.alphavantage.co/query?apikey=${API_KEY}`;

export const fetchData = async () => {
  try {
    const response = await fetch(`${API_URL}&function=TIME_SERIES_INTRADAY&symbol=IBM&interval=5min`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
    return null;
  }
};
