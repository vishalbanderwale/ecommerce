import { createContext, useReducer } from "react";
import { filterreducer } from "../Reducer/filterReducer";
export const FilterContext = createContext();

function FilterProvider({ children }) {
  const [filterState, filterDispatch] = useReducer(filterreducer, {
    category: "All",
    price: 5000,
    rating: 0,
    sort: "",
  });

  return (
    <FilterContext.Provider value={{ filterState, filterDispatch }}>
      {children}
    </FilterContext.Provider>
  );
}
export { FilterProvider };
