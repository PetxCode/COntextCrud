import React, { useReducer, createContext } from "react";
import { AppReducer } from "./AppReducer";

const initState = {
  user: [
    { id: 1, name: "Peter" },
    { id: 2, name: "Bukky" },
    { id: 3, name: "Ola" },
    { id: 4, name: "Osas" },
  ],
};

export const GlobalContext = createContext(initState);

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initState);
  return (
    <GlobalContext.Provider
      value={{
        mgs: "Welcome people",
        user: state.user,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
