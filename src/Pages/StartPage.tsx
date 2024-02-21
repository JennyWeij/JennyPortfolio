import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

function StartPage() {
  return (
    <Box
      sx={{
        background: "#2E2C31",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", sm: "column", md: "row" },
          justifyContent: "flex-start",
          alignItems: "center",
          height: "100vh",
          background: "#2E2C31",
          ml: "5%",
          color: "white",
        }}
      >
        {/* Text box */}
        <Box sx={{ marginTop: "-80px" }}>
          <Typography
            sx={{
              fontSize: { xs: "60px", md: "110px" },
              fontFamily: "Cormorant Garamond, serif",
              fontWeight: "300",
              fontStyle: "normal",
            }}
          >
            JENNY WEIJLAND
          </Typography>
          <Typography
            sx={{
              fontSize: { xs: "20px", md: "50px" },
              fontFamily: "Cormorant Garamond, serif",
              fontWeight: "300",
              fontStyle: "normal",
            }}
          >
            Studying Front End Developer <br />
            Graduating May 2024
          </Typography>
        </Box>

        {/* Image box */}
        <Box
          sx={{
            height: "400px",
            width: "400px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Box
            component="img"
            src="/images/cv.jpg"
            alt="Picture of Jenny"
            width="300px"
            height="300px"
          />
        </Box>
      </Box>
    </Box>
  );
}

export default StartPage;
