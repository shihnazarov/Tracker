import React, { useState } from "react";
import { useContext } from "react";
import { GlabalContexts } from "../contexts/glabalContexts";

const AddNewTransaction = () => {
  const [text, setText] = useState("");
  const [amount, setAmount] = useState(0);

  const addTransaction = () => {
    const transaction = {
      text: text,
      amount: +amount,
    };
    console.log(transaction);
  };

  return (
    <>
      <div className="2">
        <h1>Add New Transaction</h1>
        <p>Text</p>
        <input
          value={text}
          onChange={(e) => setText(e.target.value)}
          className="input1"
          type="text"
          placeholder="enter text"
        />
        <p>Amount ( +income, -expense)</p>

        <input
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          className="input1"
          type="text"
          placeholder="Enter amount..."
        />
      </div>
      <button onClick={addTransaction} className="Btn">
        Add Transaction
      </button>
    </>
  );
};

export default AddNewTransaction;
