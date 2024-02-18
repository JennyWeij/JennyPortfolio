import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

function AboutMe() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: { xs: "column", sm: "column", md: "row" },
      }}
    >
      <Box
        sx={{
          flex: "1",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          background: "#9998A0",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "start",
            maxWidth: "80%",
          }}
        >
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
              fontSize: { xs: "14px", md: "25px" },
              color: "black",
              fontFamily: "Cormorant Garamond, serif",
              fontWeight: "500",
              fontStyle: "normal",
              mt: "20px",
              mb: "40px",
            }}
          >
            When asked whether this girl from Dalarna can handle stress,
            different types of people, other people's stress, structure, plan
            and carry out tasks, the answer is a clear YES. <br />
            The experiences I have gained through my previous jobs, including
            jobs in the service industry, will be useful to me no matter what
            type of profession or workplace my future has to offer. <br />
            Through my previous employments, I have learned what I want to get
            out of my future workplace and what I need in order to be happy and
            want to stay.
            <br /> I am passionate about technology and its potential to drive
            positive change. I always strive to become better, faster and to do
            a good job. I look forward to gaining a lot of trust and living up
            to the expectations set for me.
          </Typography>
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
  );
}

export default AboutMe;
