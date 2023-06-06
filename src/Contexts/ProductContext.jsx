import { createContext, useEffect, useState } from "react";
import axios from "axios";
export const ProductContext = createContext();

function ProductProvider({ children }) {
  const [dbData, setDbData] = useState([]);
  async function Myproduct() {
    const productresponse = await axios.get("/api/products");

    setDbData(productresponse.data.products);
  }
  useEffect(() => {
    Myproduct();
  }, []);
  return (
    <ProductContext.Provider value={{ dbData }}>
      {children}
    </ProductContext.Provider>
  );
}
export { ProductProvider };
