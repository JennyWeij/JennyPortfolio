import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

function Projects() {
  return (
    <Box>
      <Box
        sx={{
          textAlign: "center",
          justifyItems: "center",
          color: "black",
          marginTop: "-80px",
        }}
      >
        <Typography
          fontSize="150px"
          marginBottom="-30"
          fontFamily="Cormorant Garamond, serif"
          fontWeight="300"
          fontStyle="normal"
        >
          PROJECTS
        </Typography>
        <Typography variant="h5">
          Studying Front End Developer <br />
          Graduating May 2024
        </Typography>
      </Box>
    </Box>
  );
}

export default Projects;
