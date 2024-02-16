import { Box, Container, Flex, Image } from "@chakra-ui/react";

function App() {
  return (
    <Container>
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
            marginRight: "10%",
            backgroundColor: "#224870",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Box boxSize="sm">
            <Image
              boxSize="280px"
              objectFit="cover"
              src="../public/cv.jpg"
              alt="Picture of Jenny"
            />
          </Box>
        </Box>
      </Flex>
    </Container>
  );
}

export default App;
