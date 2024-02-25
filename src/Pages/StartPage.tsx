import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

function StartPage() {
  return (
    <Box
      sx={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
      }}
    >
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
        {/* Runny vertical line */}
        <Box
          sx={{
            marginTop: "15%",
            position: "absolute",
            left: "50%", // Align to the center horizontally
            top: "50%", // Align to the center vertically
            width: "2px",
            height: "15%", // Adjust the height as needed
            background: "white",
            zIndex: 2, // Ensure the line is above the content
            "&::after": {
              content: '""',
              position: "absolute",
              top: 0,
              left: "50%",
              transform: "translate(-50%, -100%)",
              width: "100%",
              height: "100%",
              background: "#2E2C31",
              animation: "$drip 2s infinite", // Use the keyframes animation'
            },
          }}
        ></Box>
      </Box>
    </Box>
  );
}

export default StartPage;
