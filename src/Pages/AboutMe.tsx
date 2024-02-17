import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

function AboutMe() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: { xs: "column", sm: "column", md: "row" }, // Column layout for small screens, row layout for medium screens and above
      }}
    >
      <Box
        sx={{
          flex: "1",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          background: "#9998A0",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column", // Always use column layout
            alignItems: "start",
            maxWidth: "80%",
          }}
        >
          <Typography
            variant="h2"
            fontFamily="Cormorant Garamond, serif"
            fontWeight="300"
            fontStyle="normal"
          >
            ABOUT ME
          </Typography>
          <Typography
            variant="body1"
            color="white"
            fontFamily="Cormorant Garamond, serif"
            fontWeight="300"
            fontStyle="normal"
            mt="20px"
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
        </Box>
      </Box>

      {/* Image box */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          mt: { xs: "20px", md: "0" }, // Margin top for smaller screens
        }}
      >
        <Box
          sx={{
            width: { xs: "200px", md: "300px" },
            height: { xs: "200px", md: "300px" },
            background: "white",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <img
            src="/public/images/cv.jpg"
            alt="Picture of Jenny"
            width="100%"
            height="100%"
          />
        </Box>
      </Box>
    </Box>
  );
}

export default AboutMe;
