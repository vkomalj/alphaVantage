// src/App.tsx
import React, { useEffect, useState } from "react";
import { fetchData } from "./api";

const App: React.FC = () => {
  const [data, setData] = useState<any | null>(null);

  useEffect(() => {
    const fetchDataFromAPI = async () => {
      const result = await fetchData();
      setData(result);
    };
    fetchDataFromAPI();
  }, []);

  return (
     <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold my-4">Alpha Vantage Data</h1>
      {data ? (
        <pre className="bg-gray-100 p-4 rounded">{JSON.stringify(data, null, 2)}</pre>
      ) : (
        <p>Loading...</p>
      )}
    </div>
    
  );
};

export default App;
