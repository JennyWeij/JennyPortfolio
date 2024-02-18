import { Link } from "@mui/material";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

function Experience() {
  return (
    <Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", sm: "column", md: "row" },
          justifyContent: "flex-start",
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
            mt: "15px",
            ml: "5%",
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
          <Typography
            sx={{
              fontSize: { xs: "20px", md: "30px" },
              fontFamily: "Cormorant Garamond, serif",
            }}
          >
            JavaScript | React | TypeScript | React Native | AWS | UX/UI | Scrum
            | HTML | CSS | Figma | Mural
          </Typography>
          <Box
            sx={{
              width: "80%",
              margin: "10px",
              height: "2px",
              backgroundColor: "black",
            }}
          ></Box>

          <Typography
            sx={{
              fontSize: { xs: "20px", md: "30px" },
              fontFamily: "Cormorant Garamond, serif",
              fontWeight: "bold",
              fontStyle: "normal",
            }}
          >
            INTERNSHIPS
          </Typography>
          <Typography
            sx={{
              fontSize: { xs: "20px", md: "25px" },
              fontFamily: "Cormorant Garamond, serif",
            }}
          >
            My first internship, in the autumn of 2023, I spent at Chalmers
            University of Technology's IT department at Lindholmen. Here, I got
            to update email templates and participate in the development of an
            application using JavaScript and Angular.
          </Typography>
          <Typography
            sx={{
              fontSize: { xs: "20px", md: "30px" },
              fontFamily: "Cormorant Garamond, serif",
              fontWeight: "bold",
              fontStyle: "normal",
            }}
          >
            WORK EXPERIENCE
          </Typography>
          <Typography
            sx={{
              fontSize: { xs: "20px", md: "25px" },
              fontFamily: "Cormorant Garamond, serif",
            }}
          >
            I have worked as an administrative assistans at Chalmers University
            of Technology, Sales Coordinator For a full list of my previous work
            experiences, please visit my{" "}
            <Link
              underline="none"
              color="black"
              fontWeight="bold"
              href="https://www.linkedin.com/in/jenny-weijland-frontend/"
            >
              LinkedIn
            </Link>
            .
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}

export default Experience;
