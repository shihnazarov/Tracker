import React, { useContext } from "react";
import { GlabalContexts } from "../contexts/glabalContexts";

const Historiy = () => {
  const {transactions} = useContext(GlabalContexts)
  console.log(transactions);
  
  return (
    <div className="input1">
      <h1>History</h1>
      <input className="input" type="text" placeholder="No transaction" />
    </div>
  );
};

export default Historiy;
