import EmailIcon from "@mui/icons-material/Email";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { Link } from "@mui/material";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

function AboutMe() {
  return (
    <Box sx={{ position: "relative", marginTop: "120vh" }}>
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", sm: "column", md: "row" },
          justifyContent: "flex-start",
          background: "#9998A0",
        }}
      >
        <Box
          sx={{
            display: "flex",
            ml: "5%",
            alignItems: "center",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "start",
              maxWidth: "85%",
              mb: "30px",
            }}
          >
            <Typography
              sx={{
                fontSize: { xs: "18px", sm: "20px", md: "20px" },
                fontFamily: "Cormorant Garamond, serif",
                fontWeight: "500",
                fontStyle: "normal",
                mt: { xs: "15px", md: "30px", lg: "50px" },
                animation: "ease-in-typography 6s",
              }}
            >
              "The first time I encountered code was in high school. It was an
              exhilarating feeling to be able to create something using an
              entirely new language, to have a blank page in front of you and
              see it grow into a finished webpage."
            </Typography>
            <Typography
              sx={{
                fontSize: { xs: "60px", md: "100px" },
                fontFamily: "Cormorant Garamond, serif",
                fontWeight: "300",
                fontStyle: "normal",
              }}
            >
              ABOUT ME
            </Typography>
            <Typography
              sx={{
                fontSize: { xs: "20px", md: "25px" },
                color: "black",
                fontFamily: "Cormorant Garamond, serif",
                fontWeight: "600",
                mt: "20px",
                mb: "40px",
              }}
            >
              When asked whether this girl from Dalarna can handle stress,
              different types of people, other people's stress, structure, plan
              and carry out tasks, the answer is a clear YES. <br />
              My varied work experiences, particularly in the service industry,
              have equipped me with many adaptable skills.
              <br /> I am passionate about technology and its potential to drive
              positive change. I always strive to become better and to do a good
              job. I look forward to gaining a lot of trust and living up to the
              expectations set for me. <br />
              <br />
              When I am not coding I love to watch movies (all genres), listen
              to music (most genres but top 3 is: 80's, 90's and film scores),
              hang out with friends and family (both in Gothenburg and Borlänge)
              and eat amazing food at great restaurants (the spicier the
              better).
            </Typography>
            <Typography
              sx={{
                fontSize: { xs: "20px", md: "30px" },
                fontFamily: "Cormorant Garamond, serif",
                fontWeight: "bold",
                fontStyle: "normal",
              }}
            >
              CONTACT
            </Typography>
            <Box
              sx={{
                display: "flex",
                mb: "15px",
                flexWrap: "wrap",
                flexDirection: {
                  xs: "column",
                  sm: "column",
                  md: "row",
                  lg: "row",
                },
              }}
            >
              <Box>
                <Typography
                  sx={{
                    fontSize: { xs: "20px", md: "30px" },
                    fontFamily: "Cormorant Garamond, serif",
                  }}
                >
                  <Link
                    underline="none"
                    color="black"
                    href="mailto:jennyweij@outlook.com"
                    target="_blank"
                    sx={{
                      display: "inline-flex",
                      alignItems: "center",
                      "&:hover .MuiSvgIcon-root": {
                        transform: "scale(1.3)",
                      },
                    }}
                  >
                    <EmailIcon />
                    jennyweij@outlook.com |{" "}
                  </Link>
                </Typography>
              </Box>
              <Typography
                sx={{
                  fontSize: { xs: "20px", md: "30px" },
                  fontFamily: "Cormorant Garamond, serif",
                }}
              >
                <Link
                  underline="none"
                  color="black"
                  href="https://www.linkedin.com/in/jenny-weijland-frontend/"
                  target="_blank"
                >
                  <LinkedInIcon /> LinkedIn |{" "}
                </Link>
              </Typography>
              <Typography
                sx={{
                  fontSize: { xs: "20px", md: "30px" },
                  fontFamily: "Cormorant Garamond, serif",
                }}
              >
                <Link
                  underline="none"
                  color="black"
                  href="https://github.com/JennyWeij"
                  target="_blank"
                >
                  {" "}
                  <GitHubIcon /> GitHub
                </Link>
              </Typography>
            </Box>
          </Box>
        </Box>

        {/* Image box */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            background: "#9998A0",
            mt: { xs: "0px", md: "0" },
            mr: { xs: "0px", md: "6%" },
          }}
        >
          <Box
            sx={{
              width: { xs: "200px", md: "300px" },
              height: { xs: "200px", md: "300px" },
              background: "#9998A0",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <img
              src="/images/cv.jpg"
              alt="Picture of Jenny"
              width="100%"
              height="100%"
            />
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default AboutMe;
