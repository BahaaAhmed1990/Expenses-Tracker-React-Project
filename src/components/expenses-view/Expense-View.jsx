import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import React from "react";

export default function ExpenseView({ type, transactions }) {
  console.log(type, transactions);
  return (
    <Box w={"full"} flex={"1"}>
      <Flex
        alignItems={"center"}
        justifyContent={"space-between"}
        flexDirection={"column"}
      >
        <Heading p={"6"} color={type === "expenses" ? "red.700" : "blue.700"}>
          {type === "expenses" ? "Expenses" : "Income"}
        </Heading>
        <Flex flexDirection={"column"} p={"2"} w={"full"} gap={"6"}>
          {transactions &&
            transactions.map((transactionsItem) => (
              <Flex
                alignItems={"center"}
                justifyContent={"space-between"}
                borderRadius={"6"}
                border={"3px solid"}
                borderColor={type === "expenses" ? "red.300" : "blue.300"}
                bg={type === "expenses" ? "red.100" : "blue.100"}
                p={"2"}
              >
                <Text color={"gray.900"}>{transactionsItem.description}</Text>
                <Text color={"gray.900"}>{transactionsItem.amount}</Text>
              </Flex>
            ))}
        </Flex>
      </Flex>
    </Box>
  );
}
