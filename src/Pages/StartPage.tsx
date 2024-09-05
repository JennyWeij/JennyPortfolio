import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { useEffect, useRef } from "react";
import "../style.css";

function StartPage() {
  const boxRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      if (boxRef.current) {
        // Check if boxRef.current is not null
        boxRef.current.classList.toggle("slide-in-animation");
      }
    });

    return () => clearInterval(interval);
  }, []);

  return (
    <Box
      sx={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        background: "#2E2C31",
      }}
    >
      <Box
        sx={{
          background: "#2E2C31",
          ml: "5%",
          maxWidth: "100vw",
          display: "flex",
          justifyContent: "center", // Center horizontally
          alignItems: { xs: "flex-start", sm: "flex-start", md: "center" }, // Center vertically
          height: "100vh",
          position: "relative",
        }}
      >
        {/* Scroll effect  */}
        <Box id="scroll-wrapper">
          <div id="scroll-wrapper-inner">
            <div id="scroll-down"></div>
          </div>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", sm: "column", md: "row" },
            justifyContent: "flex-start",
            alignItems: "flex-start",
            background: "#2E2C31",
            color: "white",
          }}
        >
          {/* Text box */}
          <Box>
            <Typography
              sx={{
                fontSize: { xs: "60px", sm: "70px", md: "100px", lg: "100px" },
                fontFamily: "Cormorant Garamond, serif",
                fontWeight: "300",
                fontStyle: "normal",
                lineHeight: "1.30",
              }}
            >
              JENNY WEIJLAND
            </Typography>
            <Typography
              sx={{
                fontSize: { xs: "13px", sm: "15px", md: "16px" },
                fontFamily: "Comfortaa, sans-serif",
                fontWeight: "300",
                fontStyle: "normal",
                mt: { xs: "15px", md: "30px", lg: "50px" },
                animation: "ease-in-typography 12s",
              }}
            >
              "The first time I encountered code was in high school. It was an
              exhilarating feeling to be able to create something using an
              entirely new language, to have a blank page in front of you and
              see it grow into a finished webpage."
            </Typography>
          </Box>

          {/* Image box */}
          <Box
            ref={boxRef}
            sx={{
              display: "flex",
              mt: "10%",
              justifyContent: "flex-start",
              alignItems: "flex-start",
              animation:
                "slide-in-animation 3s ease-in forwards, ease-in-animation 8s",
            }}
          >
            <Box
              component="img"
              src="/images/computertea.png"
              alt="A picture of a computer and a tea cup drawn with lines"
              sx={{
                width: { xs: "350px", sm: "400px", md: "400px", lg: "600px" },
                height: { xs: "150px", sm: "150px", md: "180px", lg: "200px" },
              }}
            />
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default StartPage;
