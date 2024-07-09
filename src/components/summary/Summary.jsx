import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import React, { useContext, useEffect } from "react";
import TransactionForm from "../add-transaction/TransactionForm";
import TransactionChart from "../chart/TransactionChart";
import { GlobalContext } from "../../context";

export default function Summary({
  isOpen,
  onClose,
  totalIncome,
  totalExpenses,
}) {
  return (
    <Box
      p="6"
      border={"1px solid"}
      borderColor={"gray.100"}
      overflow={"hidden"}
      borderRadius={"10"}
      background={"white"}
      display={"flex"}
    >
      <Flex
        w={"full"}
        flexDirection={{
          base: "column",
          sm: "column",
          md: "column",
          lg: "row",
          xl: "row",
        }}
        alignItems={"center"}
        justifyContent={"center"}
      >
        <Flex
          flex={1}
          w={"full"}
          flexDirection={"column"}
          alignItems={"center"}
          justifyContent={"space-evenly"}
          ml={"-20"}
          mr={"2"}
        >
          <Heading mb={"4"}>Balance Is {totalIncome - totalExpenses}$</Heading>
          <Flex
            justifyContent={"space-evenly"}
            alignItems={"center"}
            bg={"gray.50"}
            w="full"
            h="100px"
            border={"1px solid"}
            borderColor={"gray.100"}
          >
            <Flex flexDirection={"column"}>
              <Heading color={"gray.600"}>{totalIncome}$</Heading>
              <Text color={"gray.700"}>Total Income</Text>
            </Flex>
          </Flex>
          <Flex
            justifyContent={"space-evenly"}
            alignItems={"center"}
            bg={"gray.50"}
            w="full"
            h="100px"
            border={"1px solid"}
            borderColor={"gray.100"}
          >
            <Flex flexDirection={"column"}>
              <Heading color={"gray.600"}>{totalExpenses}$</Heading>
              <Text color={"gray.700"}>Total Expense</Text>
            </Flex>
          </Flex>
        </Flex>
        <Box
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
          flex={"1"}
        >
          <TransactionChart expense={totalExpenses} income={totalIncome} />
        </Box>
      </Flex>
      <TransactionForm isOpen={isOpen} onClose={onClose} />
    </Box>
  );
}
