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
          flexDirection: "column", // Added to stack content vertically
        }}
      >
        {/* Text box */}
        <Box
          style={{
            textAlign: "center",
            justifyItems: "center",
            color: "white",
            marginTop: -80,
          }}
        >
          <Text fontSize={85} fontFamily="Bodoni Moda" marginBottom="-30">
            JENNY WEIJLAND
          </Text>
          <Text fontSize={30} fontFamily="Bodoni Moda">
            Studying Front End Developer <br />
            Graduating May 2024
          </Text>
        </Box>

        {/* Image box */}
        <Box
          marginTop="-60"
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

        {/* Second Text box */}
        <Box
          style={{
            background: "#2E2C31", // Same background color as the image box
            padding: "20px", // Added padding for spacing
            textAlign: "center",
            justifyItems: "center",
          }}
        >
          <Text fontSize={20} color="white">
            Första gången jag stötte på kod var på gymnasiet. Det var en häftig
            känsla att kunna skapa något med hjälp av ett helt nytt språk.
            <br /> Att ha en tom sida framför sig för att se den växa och bli en
            färdig webbsida.
          </Text>
        </Box>
      </Box>

      {/* Second section  */}
      <Box
        style={{
          height: "100vh",
          background: "#9998A0",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box
          style={{
            display: "flex",
            alignItems: "center",
            maxWidth: "80%", // Limit the width of the content
          }}
        >
          <Text
            fontSize={20}
            color="white"
            fontFamily="Bodoni Moda"
            style={{ marginRight: "20px" }} // Add margin between text and additional box
          >
            På frågan om den här dalkullan kan hantera stress, olika typer av
            människor, strukturera, planera, genomföra, så är svaret ett
            solklart JA. Tack för det, alla mina tidigare anställningar.
            Erfarenheterna jag har fått genom mina tidigare jobb inom bl a
            service, kommer jag att ha nytta av oavsett vilket typ av yrke eller
            arbetsplats min framtid har att erbjuda. Jag har genom mina tidigare
            anställningar lärt mig vad jag vill få ut av min framtida
            arbetsplats och vad jag behöver för att trivas och vilja stanna
            kvar.Jag är nyfiken på teknologi och dess potential att driva
            positiv förändring.
          </Text>
          {/* Additional box to the right */}
          <Box
            style={{
              width: "200px",
              height: "200px",
              background: "white",
              borderRadius: "10px",
            }}
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
      {/* Third section  */}
      <Box
        style={{
          height: "100vh",
          background: "#FAECE3",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {/* Stack box */}
        <Box
          style={{
            textAlign: "center",
            justifyItems: "center",
            color: "black",
            marginTop: -80,
          }}
        >
          <Text fontSize={85} fontFamily="Bodoni Moda" marginBottom="-30">
            STACK & EXPERIENCE
          </Text>
          <Text fontSize={30} fontFamily="Bodoni Moda">
            Studying Front End Developer <br />
            Graduating May 2024
          </Text>
        </Box>
      </Box>
    </Container>
  );
}

export default App;
