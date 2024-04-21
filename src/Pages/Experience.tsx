import { Link } from "@mui/material";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

function Experience() {
  return (
    <Box sx={{ position: "relative" }}>
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", sm: "column", md: "row" },
          justifyContent: "flex-start",
          height: "auto",
          background: "#FAECE3",
        }}
      >
        {/* Stack box */}
        <Box
          sx={{
            textAlign: "start",
            justifyItems: "start",
            maxWidth: "85%",

            mt: "15px",
            ml: "5%",
          }}
        >
          <Typography
            sx={{
              fontSize: { xs: "55px", md: "100px" },
              fontFamily: "Cormorant Garamond, serif",
              fontWeight: "300",
              fontStyle: "normal",
            }}
          >
            TECHNICAL/ <br /> WORK EXPERIENCE
          </Typography>
          <Typography
            sx={{
              fontSize: { xs: "20px", md: "30px" },
              fontFamily: "Cormorant Garamond, serif",
              mb: "15px",
            }}
          >
            JavaScript | TypeScript | React | React Native | AWS | Node.JS |
            UX/UI | MongoDB | Express | <br /> GitHub | Chakra UI | MUI | Scrum
            | Jira | HTML | CSS | Figma | Mural
          </Typography>
          <Box
            sx={{
              width: "90%",
              margin: "10px",
              height: "1px",
              backgroundColor: "black",
              mb: "15px",
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
              fontSize: { xs: "16px", md: "18px" },
              fontFamily: "Comfortaa, sans-serif;",
              fontStyle: "normal",
            }}
          >
            Chalmers University of Technology
          </Typography>
          <Typography
            sx={{
              fontSize: { xs: "14px", md: "16px" },
              mb: "15px",
              fontFamily: "Comfortaa, sans-serif",
              fontWeight: "400",
            }}
          >
            I spent my first 10 week internship, in the autumn of 2023, at
            Chalmers University of Technology's IT department at Lindholmen,
            Gothenburg. <br />
            Here, I got to participate in the development of an application
            using <b>JavaScript</b> and <b>Angular</b>.
          </Typography>
          <Typography
            sx={{
              fontSize: { xs: "16px", md: "18px" },
              fontFamily: "Comfortaa, sans-serif;",
              fontWeight: "400",
            }}
          >
            Novalo Technologies
          </Typography>
          <Typography
            sx={{
              fontSize: { xs: "14px", md: "16px" },
              fontFamily: "Comfortaa, sans-serif",
              mb: "15px",
              fontWeight: "400",
            }}
          >
            I spent my second and final internship at Novalo Technologies. Here
            I gained experience working with <b>Amazon Web Services</b> (AWS)
            and deepened my knowledge of <b>JavaScript</b> and <b>React</b>. In
            the projects during the internship I also worked with <b>Python</b>.
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
              fontSize: { xs: "14px", md: "16px" },
              fontFamily: "Comfortaa, sans-serif",
              fontWeight: "400",
            }}
          >
            I have worked as an administrative assistans at Chalmers University
            of Technology, a Sales Coordinator at Hasselblad
            <br /> and a project manager at Film i Dalarna. These employments
            have given me valuable people skills and a great understanding for
            what it means to be a reliable employee and the proud and joy of
            doing a good job. <br />
            For a full list of my previous work experiences, please visit my{" "}
            <Link
              underline="none"
              color="black"
              fontWeight="bold"
              href="https://www.linkedin.com/in/jenny-weijland-frontend/"
            >
              LinkedIn
            </Link>
            .<br />
            <br />
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}

export default Experience;
