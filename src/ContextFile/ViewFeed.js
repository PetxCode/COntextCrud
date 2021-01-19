import React, { useContext } from "react";
import GlobalContext from "./GlobalContext";

const ViewFeed = () => {
  const value = useContext(GlobalContext);

  return <div>The Vee {value}</div>;
};

export default ViewFeed;
