import React, { createContext, useEffect, useState } from "react";

export const Context = createContext();

const SearchContext = ({ children }) => {
  const [data, setData] = useState([]);

  async function fetchData() {
    try {
      const res = await fetch("/api/products");
      const newData = await res.json();
      setData(newData.products);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  function handler(event) {
    setData(data.filter((f) => 
    f.title.toLowerCase().includes(event.target.value)
    ));
  } 

  return (
    <Context.Provider value={{ data, handler }}>
      {children}
    </Context.Provider>
  );
};

export default SearchContext;
