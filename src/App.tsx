import { Box, Container, Image, Text } from "@chakra-ui/react";

function App() {
  return (
    <Container>
      <Box
        style={{
          height: "100vh",
          background: "#2E2C31",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box>
          {/* Text box */}
          <Box textAlign="center" justifyItems="center" color="white">
            <Text fontSize={60}>Jenny Weijland</Text>
            <Text fontSize={40}>
              Studying Front End Developer <br />
              Graduating May 2024
            </Text>
          </Box>

          {/* Image box */}
          <Box
            height="400px"
            width="400px"
            display="flex"
            justifyContent="center"
            alignItems="center"
          >
            <Box
              boxSize="sm"
              // boxShadow="15px 10px 10px rgba(255, 255, 255, 0.563)"
            >
              <Image
                boxSize="300px"
                objectFit="cover"
                src="../public/cv.jpg"
                alt="Picture of Jenny"
              />
            </Box>
          </Box>
        </Box>
      </Box>
    </Container>
  );
}

export default App;
