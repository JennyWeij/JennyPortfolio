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
            TECHNICAL / <br /> WORK EXPERIENCE
          </Typography>
          <Typography
            sx={{
              fontSize: { xs: "20px", md: "30px" },
              fontFamily: "Cormorant Garamond, serif",
              mb: "15px",
            }}
          >
            JavaScript | React | TypeScript | React Native | AWS | UX/UI | Scrum
            | HTML | CSS | Figma | Mural
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
            INTERNSHIP
          </Typography>
          <Typography
            sx={{
              fontSize: { xs: "20px", md: "30px" },
              fontFamily: "Cormorant Garamond, serif",
              fontStyle: "normal",
            }}
          >
            - Chalmers University of Technology
          </Typography>
          <Typography
            sx={{
              fontSize: { xs: "20px", md: "25px" },
              fontFamily: "Cormorant Garamond, serif",
              mb: "15px",
              fontWeight: "500",
            }}
          >
            I spent my first 10 week internship, in the autumn of 2023, at
            Chalmers University of Technology's IT department at Lindholmen,
            Gothenburg. Here, I got to participate in the development of an
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
            INTERNSHIP
          </Typography>
          <Typography
            sx={{
              fontSize: { xs: "20px", md: "30px" },
              fontFamily: "Cormorant Garamond, serif",
              fontStyle: "normal",
            }}
          >
            - Novalo Technologies
          </Typography>
          <Typography
            sx={{
              fontSize: { xs: "20px", md: "25px" },
              fontFamily: "Cormorant Garamond, serif",
              mb: "15px",
              fontWeight: "500",
            }}
          >
            I spent my second and final internship at Novalo Technologies. Here
            I gained experience working with Amazon Web Services (AWS) and
            deepened my knowledge of JavaScript and React. In the projects
            during the internship I also worked with Python.
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
              fontWeight: "500",
            }}
          >
            I have worked as an administrative assistans at Chalmers University
            of Technology, a Sales Coordinator at Hasselblad
            <br /> and a project manager at Film i Dalarna. <br />
            These employments have given me valuable people skills and a great
            understanding for what it means to be a reliable employee and the
            proud and joy of doing a good job. <br />
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
