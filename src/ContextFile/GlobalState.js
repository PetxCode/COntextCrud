import React from "react";
import GlobalContext from "./GlobalContext";

const GlobalState = ({ children }) => {
  return (
    <GlobalContext.Provider value={"Hello"}>{children}</GlobalContext.Provider>
  );
};

export default GlobalState;
