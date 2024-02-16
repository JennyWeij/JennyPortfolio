import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";

function App() {
  return (
    <Container>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          height: "100vh",
          background: "#2E2C31",
          marginTop: "-60px",
          textAlign: "center",
          color: "white",
        }}
      >
        {/* Text box */}
        <Box sx={{ marginTop: "-80px" }}>
          <Typography variant="h1" marginBottom="-30">
            JENNY WEIJLAND
          </Typography>
          <Typography variant="h5">
            Studying Front End Developer <br />
            Graduating May 2024
          </Typography>
        </Box>

        {/* Image box */}
        <Box
          sx={{
            marginTop: "-60px",
            height: "400px",
            width: "400px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Box
            component="img"
            src="/cv.jpg"
            alt="Picture of Jenny"
            width="300px"
            height="300px"
            sx={{ borderRadius: "50%" }}
          />
        </Box>

        {/* Second Text box */}
        <Box
          sx={{
            background: "#2E2C31",
            padding: "20px",
            textAlign: "center",
            justifyItems: "center",
          }}
        >
          <Typography variant="body1">
            Första gången jag stötte på kod var på gymnasiet. Det var en häftig
            känsla att kunna skapa något med hjälp av ett helt nytt språk.
            <br /> Att ha en tom sida framför sig för att se den växa och bli en
            färdig webbsida.
          </Typography>
        </Box>
      </Box>

      {/* Second section  */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
          background: "#9998A0",
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            textAlign: "start",
            maxWidth: "80%",
          }}
        >
          <Typography variant="h1">ABOUT ME</Typography>
          <Typography
            variant="body1"
            color="white"
            sx={{ marginRight: "20px" }}
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
          </Typography>
          {/* Additional box to the right */}
          <Box
            sx={{
              width: "200px",
              height: "200px",
              background: "white",
              borderRadius: "10px",
            }}
          >
            <Box
              component="img"
              src="/cv.jpg"
              alt="Picture of Jenny"
              width="300px"
              height="300px"
              sx={{ borderRadius: "50%" }}
            />
          </Box>
        </Box>
      </Box>

      {/* Third section  */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
          background: "#FAECE3",
        }}
      >
        {/* Stack box */}
        <Box
          sx={{
            textAlign: "start",
            justifyItems: "start",
            color: "black",
            marginTop: "-80px",
          }}
        >
          <Typography variant="h1" marginBottom="-30">
            STACK & EXPERIENCE
          </Typography>
          <Typography variant="h5">
            Studying Front End Developer <br />
            Graduating May 2024
          </Typography>
        </Box>
      </Box>

      {/* Fourth section  */}
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
          background: "#FEFEFE",
        }}
      >
        {/* Project box */}
        <Box
          sx={{
            textAlign: "center",
            justifyItems: "center",
            color: "black",
            marginTop: "-80px",
          }}
        >
          <Typography variant="h1" marginBottom="-30">
            PROJECTS
          </Typography>
          <Typography variant="h5">
            Studying Front End Developer <br />
            Graduating May 2024
          </Typography>
        </Box>

        {/* Grid containing cards */}
        {/* <ImageList sx={{ width: 500, height: 450 }} cols={3} rowHeight={164}>
          {itemData.map((item) => (
            <ImageListItem key={item.img}>
              <img
                srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
                alt={item.title}
                loading="lazy"
              />
            </ImageListItem>
          ))}
        </ImageList> */}
      </Box>
    </Container>
  );
}

export default App;
