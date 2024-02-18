import GitHubIcon from "@mui/icons-material/GitHub";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

function Projects() {
  const projects = [
    {
      title: "Travel Planner (app)",
      imagePath: "/images/TravelPlannerapp.jpg.png",
      githubLink: "https://github.com/JennyWeij/TravelApp",
    },
    {
      title: "Binding Blooms",
      imagePath: "/images/BindingBlooms.png",
      githubLink: "https://github.com/JennyWeij/BindingBlooms",
    },
    {
      title: "PlanetEn",
      imagePath: "/images/PlanetEn.png",
      githubLink: "https://github.com/JennyWeij/PlanetEn-Javascript",
    },
    {
      title: "Star Bomb",
      imagePath: "/images/StarBomb.png",
      githubLink: "https://github.com/JennyWeij/Star-Bomb-game",
    },
  ];

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        background: "#FEFEFE",
        padding: "20px",
      }}
    >
      <Typography
        sx={{
          fontSize: { xs: "60px", md: "100px" },
          fontFamily: "Cormorant Garamond, serif",
          fontWeight: "300",
          fontStyle: "normal",
          ml: "3%",
        }}
      >
        PROJECTS
      </Typography>

      <Grid container spacing={3}>
        {projects.map((project) => (
          <Grid
            item
            xs={12}
            sm={6}
            md={4}
            // eslint-disable-next-line no-constant-condition
            lg={project.title === "Binding Blooms" || "Star Bomb" ? 3 : 2}
            key={project.title}
          >
            {/* Adjust the size of the Grid item based on your design */}
            <Card
              sx={{ height: "100%", display: "flex", flexDirection: "column" }}
            >
              <CardContent>
                <img
                  src={project.imagePath}
                  alt={project.title}
                  style={{
                    maxWidth: "100%", // Ensure the image fits within the card
                    height: "auto", // Maintain aspect ratio
                    margin: "10px auto",
                  }}
                />
                <Box
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <Typography
                    variant="h5"
                    mt="10px"
                    fontFamily="Cormorant Garamond, serif"
                  >
                    {project.title}
                  </Typography>
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <GitHubIcon />
                  </a>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default Projects;
