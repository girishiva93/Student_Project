import { Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import Logo from "../../assets/images/Logo2.svg";
import Flag from "../../assets/images/Flag.png";
import Location from "../../assets/images/marker.png";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import "../../assets/styles/footer.scss";

const Footer = () => {
  return (
    <>
      <Box className="footer-container">
        <Grid container spacing={2}>
          <Grid item xs={12} md={4} style={{ textAlign: "left" }}>
            <img src={Logo} alt="logo" />
            <Box sx={{ display: "flex", mt: "46.15px" }}>
              <img
                src={Location}
                alt="location"
                height={"25px"}
                width={"26px"}
                style={{ marginRight: "17px" }}
              />
              <p className="location">
                24, Vaishnavi Centre, Raja Park,
                <br />
                51, Dhanana, Panipat, Haryana,
                <br /> Pincode-154419
              </p>
            </Box>
          </Grid>
          <Grid item xs={12} md={2} style={{ textAlign: "left" }}>
            <Typography
              variant="h6"
              className="footer-title"
              component="div"
              gutterBottom
            >
              THE BASICS
            </Typography>
            <p className="footer-subtitle">About Weekend watch</p>
            <p className="footer-subtitle">Contact Us</p>
            <p className="footer-subtitle">Support</p>
            <p className="paragraph-no-margin">API</p>
          </Grid>
          <Grid item xs={12} md={2} style={{ textAlign: "left" }}>
            <Typography
              variant="h6"
              className="footer-title"
              component="div"
              gutterBottom
            >
              GET INVOLVED
            </Typography>
            <p className="footer-subtitle">Contribution Guidelines</p>
            <p className="footer-subtitle">Add New Movie</p>
            <p className="footer-subtitle">Add New TV Show</p>
          </Grid>
          <Grid item xs={12} md={2} style={{ textAlign: "left" }}>
            <Typography
              variant="h6"
              className="footer-title"
              component="div"
              gutterBottom
            >
              COMMUNITY
            </Typography>
            <p className="footer-subtitle">Guidelines</p>
            <p className="footer-subtitle">Discussions</p>
            <p className="footer-subtitle">Leaderboard</p>
            <p className="footer-subtitle">Tweeter</p>
          </Grid>
          <Grid item xs={12} md={2} style={{ textAlign: "left" }}>
            <Typography
              variant="h6"
              className="footer-title"
              component="div"
              gutterBottom
            >
              LEGAL
            </Typography>
            <p className="footer-subtitle">Terms of use</p>
            <p className="footer-subtitle">API Terms of use</p>
            <p className="paragraph-no-margin">Privacy Policy</p>
          </Grid>
        </Grid>
      </Box>
      <Box className="copyright-container ">
        <div className="container d-flex justify-content-between">
          <p className="paragraph-no-margin copyright-text">
            © 2022 STAR. All Rights Reserved. Weekend watch’s all related Movies
            and TV Shoes are part of copyright.
          </p>

          <Box className="footer-country">
            <img
              src={Flag}
              alt="flag"
              width={19}
              height={19}
              style={{ marginRight: "8px" }}
            />
            <p className="paragraph-no-margin">India</p>
            <ArrowDropDownIcon />
          </Box>
        </div>
      </Box>
    </>
  );
};
export default Footer;
