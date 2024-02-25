import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { useEffect, useRef } from "react";

function StartPage() {
  const boxRef = useRef<HTMLDivElement>(null); // Define the type of the ref

  useEffect(() => {
    const interval = setInterval(() => {
      if (boxRef.current) {
        // Check if boxRef.current is not null
        boxRef.current.style.transform = "translateY(0%)"; // Reset to initial position
        setTimeout(() => {
          if (boxRef.current) {
            boxRef.current.style.transform = "translateY(-100%)"; // Move to bottom
          }
        }); // Wait for 50 milliseconds before starting the animation
      }
    }, 500);

    return () => clearInterval(interval);
  }, []);

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
      {/* Runny vertical line */}
      <Box
        ref={boxRef}
        style={{
          transform:
            "translate3d(0px, -3.419%, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
          transformStyle: "preserve-3d",
          willChange: "transform",
          marginTop: "15%",
          // position: "absolute",
          left: "50%", // Align to the center horizontally
          top: "50%", // Align to the center vertically
          width: "2px",
          height: "20%", // Adjust the height as needed
          background: "white",
        }}
      ></Box>
    </Box>
  );
}

export default StartPage;
