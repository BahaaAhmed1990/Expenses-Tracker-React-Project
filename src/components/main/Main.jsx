import { Button, Flex, Heading, useDisclosure } from "@chakra-ui/react";
import React, { useContext, useEffect } from "react";
import Summary from "../summary/Summary";
import ExpenseView from "../expenses-view/Expense-View";
import { GlobalContext } from "../../context";

export default function Main() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const {
    totalIncome,
    setTotalIncome,
    totalExpenses,
    setTotalExpenses,
    allTransactions,
  } = useContext(GlobalContext);

  useEffect(() => {
    let income = 0;
    let expenses = 0;

    allTransactions.forEach((transactionItem) => {
      console.log(transactionItem);
      transactionItem.type === "income"
        ? (income = parseFloat(transactionItem.amount) + income)
        : (expenses = parseFloat(transactionItem.amount) + expenses);
    });

    setTotalIncome(income);
    setTotalExpenses(expenses);
  }, [allTransactions]);
  return (
    <Flex flexDirection={"column"} pr={"5"} pl={"5"}>
      <Flex
        alignItems={"center"}
        justifyContent={"space-between"}
        pt={"7"}
        pb={"7"}
      >
        <Heading color={"blue.500"}>Expense Tracker</Heading>
        <Flex>
          <Button
            bg={"blue.500"}
            color={"white"}
            _hover={{ color: "black", bg: "gray.100" }}
            onClick={onOpen}
          >
            Add Transaction
          </Button>
        </Flex>
      </Flex>
      <Summary
        isOpen={isOpen}
        onOpen={onOpen}
        onClose={onClose}
        totalIncome={totalIncome}
        totalExpenses={totalExpenses}
      />
      <Flex
        w={"full"}
        alignItems={"flex-start"}
        justifyContent={"space-evenly"}
        flexDirection={["column", "column", "column", "row", "row"]}
      >
        <ExpenseView
          type="expenses"
          transactions={allTransactions.filter(
            (transactionItem) => transactionItem.type === "expenses"
          )}
        />
        <ExpenseView
          type="income"
          transactions={allTransactions.filter(
            (transactionItem) => transactionItem.type === "income"
          )}
        />
      </Flex>
    </Flex>
  );
}
