import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

function Projects() {
  const projects = [
    { title: "Travel Planner", imagePath: "/public/images/TravelPlanner.jpg" },
    { title: "Binding Blooms", imagePath: "/public/images/BindingBlooms.png" },
    { title: "Star Bomb", imagePath: "/public/images/StarBomb.png" },
    // { title: "Binding Blooms", imagePath: "/public/images/BindingBlooms.png" },
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
            <Card sx={{ height: "100%" }}>
              <CardContent>
                <img
                  src={project.imagePath} // Use the actual image path from the project object
                  alt={project.title} // Use the actual title from the project object
                  style={{ maxWidth: "100%", height: "auto" }} // Ensure image is responsive
                />
                <Typography variant="h5" mt="10px">
                  {project.title}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default Projects;
