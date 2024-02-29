import GitHubIcon from "@mui/icons-material/GitHub";
import PlayCircleIcon from "@mui/icons-material/PlayCircle";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { useState } from "react";

function Projects() {
  const [hoveredProject, setHoveredProject] = useState<string | null>(null);

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
      demoLink: "https://binding-blooms.netlify.app/",
      githubLink: "https://github.com/JennyWeij/BindingBlooms",
    },
    {
      title: "Chatropolis",
      description:
        "A school group project where we created a chat-based app that allows users to chat with each other in real-time. The communication was set up and done using socket.io",
      imagePath: "/images/chatropolis.png",
      githubLink: "https://github.com/JennyWeij/project-socket-chat",
    },
    {
      title: "ChitChat",
      description:
        "School group project. A chat application that aims to create a platform where users can register, log in, and create content based on a resource in an Express API.",
      imagePath: "/images/chitchat.png",
      githubLink: "https://github.com/JennyWeij/ChitChat",
    },
    {
      title: "PlanetEn",
      description:
        "A quiz I created during my first week of the JavaScript course. We were asked to create a interactive world and this quiz about gorillas and pandas is my result of that task.",
      imagePath: "/images/PlanetEn.png",
      demoLink: "https://planetenjavascript.netlify.app/",
      githubLink: "https://github.com/JennyWeij/PlanetEn-Javascript",
    },
    {
      title: "Star Bomb",
      description:
        "School group project. Final project in the JavaScript basic course. The task was to create a original game and Star Bomb is our result of that final project.",
      imagePath: "/images/StarBomb.png",
      demoLink: "https://star-bomb.netlify.app/",
      githubLink: "https://github.com/JennyWeij/Star-Bomb-game",
    },
  ];

  const handleCardHover = (title: string) => {
    setHoveredProject(title);
  };

  const handleCardLeave = () => {
    setHoveredProject(null);
  };

  return (
    <Box
      sx={{
        position: "absolute",
        backgroundColor: "white",
        marginBottom: "150px",
      }}
    >
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
              <Card
                sx={{
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  transformStyle: "preserve-3d",
                  transition: "transform 1.5s",
                  transform:
                    hoveredProject === project.title
                      ? "rotateY(180deg)"
                      : "rotateY(0)",
                }}
                onMouseEnter={() => handleCardHover(project.title)}
                onMouseLeave={handleCardLeave}
              >
                <CardContent
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                  }}
                >
                  <img
                    src={project.imagePath}
                    alt={project.title}
                    style={{
                      maxWidth: "100%",
                      maxHeight: "200px",
                      width: "auto",
                      height: "auto",
                      margin: "10px auto",
                    }}
                  />
                  <Box
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      width: "100%", // Ensures the contents are stretched
                      marginTop: "auto", // Pushes content to the bottom
                    }}
                  >
                    <Typography
                      variant="h5"
                      mt="10px"
                      fontFamily="Cormorant Garamond, serif"
                    >
                      {project.title}
                    </Typography>
                    {project.demoLink && (
                      <a
                        href={project.demoLink}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <PlayCircleIcon />
                      </a>
                    )}
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <GitHubIcon />
                    </a>
                  </Box>
                </CardContent>

                <CardContent
                  sx={{
                    backgroundColor: "#FAECE3",
                    transform: "rotateY(180deg)",
                    position: "absolute",
                    top: 0,
                    left: 0,
                    maxWidth: "100%",
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    visibility:
                      hoveredProject === project.title ? "visible" : "hidden",
                  }}
                >
                  <Typography
                    sx={{
                      fontFamily: "Cormorant Garamond, serif",
                      fontSize: { xs: "16px", md: "25px" },
                    }}
                  >
                    {project.description} <br />
                    {project.demoLink && (
                      <a
                        href={project.demoLink}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <PlayCircleIcon />
                      </a>
                    )}
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <GitHubIcon />
                    </a>
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
}

export default Projects;
