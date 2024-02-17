import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

function StartPage() {
  return (
    <Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          height: "100vh",
          background: "#2E2C31",
          // marginTop: "-60px",
          textAlign: "center",
          color: "white",
        }}
      >
        {/* Text box */}
        <Box sx={{ marginTop: "-80px" }}>
          <Typography
            variant="h1"
            // marginBottom="-30"
            fontFamily="Cormorant Garamond, serif"
            fontWeight="300"
            fontStyle="normal"
          >
            JENNY WEIJLAND
          </Typography>
          <Typography
            variant="h5"
            fontFamily="Cormorant Garamond, serif"
            fontWeight="300"
            fontStyle="normal"
          >
            Studying Front End Developer <br />
            Graduating May 2024
          </Typography>
        </Box>

        {/* Image box */}
        <Box
          sx={{
            // marginTop: "-60px",
            height: "400px",
            width: "400px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Box
            component="img"
            src="/public/images/cv.jpg"
            alt="Picture of Jenny"
            width="300px"
            height="300px"
            // sx={{ borderRadius: "50%" }}
          />
        </Box>
      </Box>
    </Box>
  );
}

export default StartPage;
