import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

function Experience() {
  return (
    <Box>
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
          }}
        >
          <Typography
            sx={{
              fontSize: { xs: "40px", md: "100px" },
              fontFamily: "Cormorant Garamond, serif",
              fontWeight: "300",
              fontStyle: "normal",
            }}
          >
            TECHNICAL / <br /> WORK EXPERIENCE
          </Typography>
          <Typography variant="h5">
            Studying Front End Developer <br />
            Graduating May 2024
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}

export default Experience;
