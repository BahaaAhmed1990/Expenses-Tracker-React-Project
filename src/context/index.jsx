import { createContext, useState } from "react";

export const GlobalContext = createContext(null);

import React from "react";

export default function GlobalState({ children }) {
  const [formData, setFormData] = useState({
    description: "",
    amount: 0,
    type: "expenses",
  });
  const [value, setValue] = useState("expenses");
  const [allTransactions, setAllTransactions] = useState([]);
  const [totalIncome, setTotalIncome] = useState(0);
  const [totalExpenses, setTotalExpenses] = useState(0);

  function handleFormSubmit(getFormData) {
    if (!getFormData.description || !getFormData.amount) return;
    setAllTransactions([
      ...allTransactions,
      {
        ...formData,
        id: Date.now(),
      },
    ]);
  }

  return (
    <GlobalContext.Provider
      value={{
        formData,
        setFormData,
        value,
        setValue,
        totalIncome,
        setTotalIncome,
        totalExpenses,
        allTransactions,
        setAllTransactions,
        setTotalExpenses,
        handleFormSubmit,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
}
