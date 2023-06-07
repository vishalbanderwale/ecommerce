import { createContext, useReducer } from "react";
import { pageReducer } from "../Reducer/PageReducer";
export const PageContext = createContext();
function PageProvider({ children }) {
  const [pageState, pageDispatch] = useReducer(pageReducer, {
    cart: [],
    wishlist: [],
  });
  return (
    <div>
      <PageContext.Provider value={{ pageState, pageDispatch }}>
        {" "}
        {children}
      </PageContext.Provider>
    </div>
  );
}
export { PageProvider };
