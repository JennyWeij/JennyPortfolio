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
      imagePath: "/public/images/TravelPlannerapp.jpg.png",
    },
    { title: "Binding Blooms", imagePath: "/public/images/BindingBlooms.png" },
    { title: "Star Bomb", imagePath: "/public/images/StarBomb.png" },
    { title: "PlanetEn", imagePath: "/public/images/PlanetEn.png" },
    // Add more project objects as needed
  ];

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        background: "#FEFEFE",
        padding: "20px", // Add padding to provide some spacing around the cards
      }}
    >
      <Typography
        variant="h1"
        fontFamily="Cormorant Garamond, serif"
        fontWeight="300"
        fontStyle="normal"
        mb="20px" // Add margin bottom to provide some spacing between the title and the cards
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
              <CardContent style={{ flexGrow: 1 }}>
                <img
                  src={project.imagePath} // Use the actual image path from the project object
                  alt={project.title} // Use the actual title from the project object
                  style={{
                    maxWidth: "auto",
                    height: "200px",
                    margin: "10px auto",
                  }} // Ensure image is responsive
                />
                <Box
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <Typography variant="h5" mt="10px">
                    {project.title}
                  </Typography>
                  <GitHubIcon />
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
