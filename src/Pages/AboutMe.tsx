import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

function AboutMe() {
  return (
    <Box>
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
          <Typography
            fontSize="150px"
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
            }}
          >
            <Box
              component="img"
              src="/public/images/cv.jpg"
              alt="Picture of Jenny"
              width="300px"
              height="300px"
            />
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default AboutMe;
