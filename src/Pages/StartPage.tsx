import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

function StartPage() {
  return (
    <Box
      sx={{
        background: "#2E2C31",
        display: "flex",
        justifyContent: "center", // Center horizontally
        alignItems: "center", // Center vertically
        height: "100vh",
        position: "relative", // Add relative positioning
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", sm: "column", md: "row" },
          justifyContent: "flex-start",
          alignItems: "center",
          background: "#2E2C31",
          color: "white",
          position: "relative", // Make the container relative
          zIndex: 1, // Ensure the content is above the line
        }}
      >
        {/* Text box */}
        <Box>
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
      {/* <Box
        sx={{
          position: "relative",
          width: "2px",
          height: "10%",
          transformStyle: "preserve-3d",
          transform: "translate3d",
          animation: `$drip 2s infinite`, // Use the keyframes animation'
          "@keyframes drip": {
            "0%": {
              transform: "translateY(0%)",
            },
            "100%": {
              transform: "translateY(-100%)",
            },
          },
          zIndex: 2, // Ensure the line is above the content
        }}
      ></Box> */}
    </Box>
  );
}

export default StartPage;
