import { useContext, useState } from "react";
import "./App.css";
import { Box, Container, Flex } from "@chakra-ui/react";
import Main from "./components/main/Main";

function App() {
  return (
    <>
      <Container
        bg={"#f8fafd"}
        height={"100vh"}
        w={"100%"}
        maxW={"8xl"}
        p={"0"}
      >
        <Flex height={"full"} w={"100%"}>
          <Box height={"full"} flex={"5"} w="100%">
            <Main />
          </Box>
        </Flex>
      </Container>
    </>
  );
}

export default App;
