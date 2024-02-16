import { Box, Flex } from "@chakra-ui/react";

function App() {
  return (
    <Flex
      style={{
        height: "100vh",
        background:
          "linear-gradient(151deg, rgba(34,72,112,1) 43%, rgba(68,207,203,1) 100%)",
      }}
      align="center"
      justify="flex-end"
    >
      <Box
        style={{
          height: "400px",
          width: "400px",
          marginRight: "150px",
          backgroundColor: "#224870",
        }}
      ></Box>
    </Flex>
  );
}

export default App;
