import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { useEffect, useRef } from "react";
import "../style.css";

function StartPage() {
  const boxRef = useRef<HTMLDivElement>(null); // Define the type of the ref

  useEffect(() => {
    const interval = setInterval(() => {
      if (boxRef.current) {
        // Check if boxRef.current is not null
        boxRef.current.classList.toggle("slide-in-animation");
      }
    }); // Run animation every 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <Box
      sx={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        background: "#2E2C31",
      }}
    >
      <Box
        sx={{
          background: "#2E2C31",
          ml: "5%",
          display: "flex",
          justifyContent: "flex-start", // Center horizontally
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
            alignItems: "flex-start",
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
                fontSize: { xs: "60px", md: "100px" },
                fontFamily: "Cormorant Garamond, serif",
                fontWeight: "300",
                fontStyle: "normal",
              }}
            >
              JENNY WEIJLAND
            </Typography>
            <Typography
              sx={{
                fontSize: { xs: "20px", md: "40px" },
                fontFamily: "Cormorant Garamond, serif",
                fontWeight: "300",
                fontStyle: "normal",
              }}
            >
              Studying Front End Developer <br />
              Graduating May 2024
            </Typography>
            <br />
            <br />
            <Typography
              sx={{
                fontSize: { xs: "20px", md: "20px" },
                fontFamily: "Cormorant Garamond, serif",
                fontWeight: "300",
                fontStyle: "normal",
              }}
            >
              "The first time I encountered code was in high school. <br />
              It was an exhilarating feeling to be able to create something
              using an entirely new language, <br />
              to have a blank page in front of you and see it grow into a
              finished webpage.""
            </Typography>
          </Box>

          {/* Image box */}
          <Box
            ref={boxRef}
            sx={{
              height: "400px",
              width: "400px",
              display: "flex",
              mt: "10%",
              justifyContent: "flex-start",
              alignItems: "flex-start",
              animation: "slide-in-animation 1s ease-in forwards", // Apply animation
            }}
          >
            <Box
              component="img"
              src="/images/computertea.png"
              alt="A picture of a computer and a tea cup drawn with lines"
              width="600px"
              height="200px"
            />
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default StartPage;
