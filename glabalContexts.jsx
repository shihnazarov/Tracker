import { createContext, useState } from "react";

const GlabalContexts = createContext({});

const GlabalProvider = ({ children }) => {
  const [balance, setBalance] = useState(0);
  const [income, setIncome] = useState();
  const [expense, setExpense] = useState(0);
  const [transaction, setTransaction] = useState([]);

  return (
    <GlabalContexts.Provider
      value={{
        balance,
        setBalance,
        income,
        setIncome,
        expense,
        setExpense,
        transaction,
        setTransaction,
      }}
    >
      {children}
    </GlabalContexts.Provider>
  );
};

export { GlabalProvider, GlabalContexts };
