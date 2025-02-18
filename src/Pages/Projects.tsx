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
      when: "December 2023 - January 2024",
      githubLink: "https://github.com/JennyWeij/TravelApp",
    },
    {
      title: "Binding Blooms",
      description:
        "My project from the graphic design course where we were asked to create a graphic profile, a logo and a website. I made up the company Binding Blooms.",
      imagePath: "/images/BindingBlooms.png",
      when: "August 2023 - September 2023",
      demoLink: "https://binding-blooms.netlify.app/",
      githubLink: "https://github.com/JennyWeij/BindingBlooms",
    },
    {
      title: "Chatropolis",
      description:
        "A school group project where we created a chat-based app that allows users to chat with each other in real-time. The communication was set up and done using socket.io",
      when: "May 3rd, 2023 - May 12th, 2023",
      imagePath: "/images/chatropolis.png",
      githubLink: "https://github.com/JennyWeij/project-socket-chat",
    },
    {
      title: "ChitChat",
      description:
        "School group project. A chat application that aims to create a platform where users can register, log in, and create content based on a resource in an Express API.",
      imagePath: "/images/chitchat.png",
      when: "April 12th, 2023 - April 28th, 2023",
      githubLink: "https://github.com/JennyWeij/ChitChat",
    },
    {
      title: "PlanetEn",
      description:
        "A quiz I created during my first week of the JavaScript course. We were asked to create a interactive world and this quiz about gorillas and pandas is my result of that task.",
      imagePath: "/images/PlanetEn.png",
      when: "November 11th, 2022 - November 21st, 2022",
      demoLink: "https://planetenjavascript.netlify.app/",
      githubLink: "https://github.com/JennyWeij/PlanetEn-Javascript",
    },
    {
      title: "Star Bomb",
      description:
        "School group project. Final project in the JavaScript basic course. The task was to create a original game and Star Bomb is our result of that final project.",
      imagePath: "/images/StarBomb.png",
      when: "January 2023 - February 2023",
      demoLink: "https://star-bomb.netlify.app/",
      githubLink: "https://github.com/JennyWeij/Star-Bomb-game",
    },
  ];

  const internshipProject = {
    title: "Novalo Academy",
    description:
      "On my second internship at Novalo Technologies me and two other interns created Novalo Academy. A learning platform where companies can sign up for different agile related courses. This project was created using AWS (Amplify, Lambda, DynamoDB, CloudWatch, S3, API Gateway and CloudFront), Python, JavaScript, React, TypeScript and MUI. Please click the icon below to try it out!",
    imagePath: "/images/novalocourse.png",
    when: "January 2024 - May 2024",
    demoLink: "https://academy.novalo.se/",
  };

  const personalProject = {
    title: "Matchanalys",
    description:
      "Together with Madeleine Gustafsson, I have developed a web application where you can enter data and analyze events in a floorball game. The project has been used by Svenska Innebandyförbundet to analyze games in the 2024 Men's World Floorball Championship. For more information on this project, please contact me.",
    imagePath: "/images/matchanalys.png",
    when: "June 2024 - ongoing",
  };

  const handleCardHover = (title: string) => {
    setHoveredProject(title);
  };

  const handleCardLeave = () => {
    setHoveredProject(null);
  };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const renderCard = (project: any) => (
    <Card
      sx={{
        height: "100%",
        display: "flex",
        flexDirection: "column",
        transformStyle: "preserve-3d",
        transition: "transform 1.5s",
        transform:
          hoveredProject === project.title ? "rotateY(180deg)" : "rotateY(0)",
      }}
      onMouseEnter={() => handleCardHover(project.title)}
      onMouseLeave={handleCardLeave}
    >
      <CardContent
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "flex-end",
        }}
      >
        <img
          src={project.imagePath}
          alt={project.title}
          style={{
            maxWidth: "100%",
            maxHeight: "400px",
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
            width: "100%",
            marginTop: "auto",
          }}
        >
          <Typography
            variant="h5"
            mt="10px"
            fontFamily="Cormorant Garamond, serif"
            style={{ alignSelf: "flex-start" }}
          >
            {project.title}
          </Typography>
          <Box style={{ display: "flex", alignItems: "center" }}>
            {project.demoLink && (
              <a
                href={project.demoLink}
                target="_blank"
                rel="noopener noreferrer"
                style={{ marginRight: "10px" }}
              >
                <PlayCircleIcon sx={{ color: "black" }} />
              </a>
            )}
            {project.githubLink && (
              <a
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                <GitHubIcon sx={{ color: "black !important" }} />
              </a>
            )}
          </Box>
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
          visibility: hoveredProject === project.title ? "visible" : "hidden",
        }}
      >
        <Typography
          sx={{
            fontFamily: "Comfortaa, sans-serif",
            fontSize: { xs: "16px", md: "18px" },
          }}
        >
          {project.description} <br />
          <br />
          {project.when} <br />
          {project.demoLink && (
            <a
              href={project.demoLink}
              target="_blank"
              style={{ marginRight: "10px" }}
              rel="noopener noreferrer"
            >
              <PlayCircleIcon sx={{ color: "black" }} />
            </a>
          )}
          {project.githubLink && (
            <a
              href={project.githubLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              <GitHubIcon sx={{ color: "black" }} />
            </a>
          )}
        </Typography>
      </CardContent>
    </Card>
  );

  return (
    <Box sx={{ position: "relative" }}>
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", sm: "column", md: "row" },
          justifyContent: "flex-start",
          height: "auto",
          background: "#FEFEFE",
        }}
      >
        <Box
          sx={{
            marginBottom: "150px",
            display: "flex",
            ml: "3%",
            mr: "3%",
            flexDirection: "column",
            justifyContent: "flex-start",
            background: "#FEFEFE",
            padding: "20px",
          }}
        >

          <Typography
            sx={{
              fontSize: { xs: "50px", md: "100px" },
              fontFamily: "Cormorant Garamond, serif",
              fontWeight: "300",
              fontStyle: "normal",
              marginTop: "10px",
            }}
          >
            PERSONAL PROJECT
          </Typography>
  
          <Box
            sx={{
              width: { xs: "100%", sm: "100%", md: "33.33%" },
            }}
          >
            {renderCard(personalProject)}
          </Box>

          <Typography
            sx={{
              fontSize: { xs: "50px", md: "100px" },
              fontFamily: "Cormorant Garamond, serif",
              fontWeight: "300",
              fontStyle: "normal",
              marginTop: "10px",
            }}
          >
            INTERNSHIP PROJECT
          </Typography>
  
          <Box
            sx={{
              width: { xs: "100%", sm: "100%", md: "33.33%" },
            }}
          >
            {renderCard(internshipProject)}
          </Box>
          <Typography
            sx={{
              fontSize: { xs: "60px", md: "100px" },
              fontFamily: "Cormorant Garamond, serif",
              fontWeight: "300",
              fontStyle: "normal",
            }}
          >
           SCHOOL PROJECTS
          </Typography>

          <Grid container spacing={3}>
            {projects.map((project) => (
              <Grid item xs={12} sm={6} md={4} key={project.title}>
                {renderCard(project)}
              </Grid>
            ))}
          </Grid>

        </Box>
      </Box>
    </Box>
  );
}

export default Projects;
