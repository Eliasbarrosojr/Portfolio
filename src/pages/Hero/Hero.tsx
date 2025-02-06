import { Box, Button, Container, styled, Typography } from "@mui/material";
import avatar from "../../assets/avatar.jpg";
import DownloadIcon from "@mui/icons-material/Download";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";

const Hero = () => {
  const StyledHero = styled("div")(({ theme }) => ({
    backgroundColor: theme.palette.primary.main,
    height: "100vh",
  }));

  const StyledImg = styled("img")(() => ({
    width: "100%",
    borderRadius: "50%",
  }));

  return (
    <StyledHero>
      <Container>
        <Box
          display="grid"
          gridTemplateColumns={{ xs: "1fr", sm: "1fr 2fr" }}
          gap={2}
        >
          <StyledImg src={avatar} />
          <Box>
            <Typography
              color="primary.contrastText"
              variant="h1"
              textAlign="center"
            >
              Elias Barroso Jr
            </Typography>
            <Typography color="secondary" variant="h2" textAlign="center">
              I'm Software Engineer
            </Typography>
            <Box
              display="grid"
              gridTemplateColumns={{ xs: "1fr", sm: "1fr 1fr" }}
              gap={2}
            >
              <Button color="secondary">
                <DownloadIcon />
                Download CV
              </Button>
              <Button>
                <AlternateEmailIcon />
                Contact Me
              </Button>
            </Box>
          </Box>
        </Box>
      </Container>
    </StyledHero>
  );
};

export default Hero;
