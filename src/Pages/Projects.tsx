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
      description:
        "React Native app Travel Planner, made together with Madeleine Gustafsson. Our final project in school.",
      imagePath: "/images/TravelPlannerapp.jpg.png",
      githubLink: "https://github.com/JennyWeij/TravelApp",
    },
    {
      title: "Binding Blooms",
      description:
        "My project from the graphic design course where we were asked to create a graphic profile, a logo and a website. I made up the company Binding Blooms.",
      imagePath: "/images/BindingBlooms.png",
      githubLink: "https://github.com/JennyWeij/BindingBlooms",
    },
    {
      title: "Chatropolis",
      description: "",
      imagePath: "/images/chatropolis.png",
      githubLink: "https://github.com/JennyWeij/project-socket-chat",
    },
    {
      title: "ChitChat",
      description: "",
      imagePath: "/images/chitchat.png",
      githubLink:
        "https://github.com/plugga-tech/react-express-user-content-ts-jenny-madde-jenny",
    },
    {
      title: "PlanetEn",
      description: "",
      imagePath: "/images/PlanetEn.png",
      githubLink: "https://github.com/JennyWeij/PlanetEn-Javascript",
    },
    {
      title: "Star Bomb",
      description:
        "Final project in the JavaScript basic course. The task was to create a original game and Star Bomb is our result of that final project.",
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
