import { makeStyles, Typography } from "@material-ui/core";
import { GiWhiteBook } from "react-icons/gi";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    color: "black",
    paddingLeft: 20,
    paddingRight: 20,
    display: "flex",
    justifyContent: "space-around",
    flexWrap: "wrap",
  },

  footerHeader: {
    fontWeight: 700,
    fontSize: "0.9rem",
  },

  footerLink: {
    color: "black",
      textDecoration: "none",
    transition: "transform 400ms ease",
    "&:hover": {
      opacity: 0.8,
        transform: "scale(1.1, 1.1)",
    },
  },
  fiber: {
    maxWidth: 300,
    padding: 20,
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "flex-start",
  },
}));
function Footer() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      {/* SPENCE */}
      <div className={classes.fiber}>
        <Typography className={classes.footerHeader} variant="h5">
          Fiber
        </Typography>
        <Typography variant="subtitle2">
          With Fiber, you can setup your own personal portfolio in minutes with
          dozens of premade, beautiful templates.
        </Typography>
      </div>

      {/* SITE MAP */}
      <div className={classes.fiber}>
        <Typography className={classes.footerHeader} variant="h5">
          Sitemap
        </Typography>
        <Typography
          component={Link}
          to="/"
          className={classes.footerLink}
          variant="subtitle2"
        >
          Homepage
        </Typography>
        <Typography
          component={Link}
          to="/"
          className={classes.footerLink}
          variant="subtitle2"
        >
          Pricing
        </Typography>
        <Typography
          component={Link}
          to="/"
          className={classes.footerLink}
          variant="subtitle2"
        >
          Testimonials
        </Typography>
        <Typography
          component={Link}
          to="/"
          className={classes.footerLink}
          variant="subtitle2"
        >
          Features
        </Typography>
      </div>

      {/* RESOURCES */}
      <div className={classes.fiber}>
        <Typography className={classes.footerHeader} variant="h5">
          Resources
        </Typography>
        <Typography
          component={Link}
          to="/"
          className={classes.footerLink}
          variant="subtitle2"
        >
          Support
        </Typography>
        <Typography
          component={Link}
          to="/"
          className={classes.footerLink}
          variant="subtitle2"
        >
          Contact
        </Typography>

        <Typography
          component={Link}
          to="/"
          className={classes.footerLink}
          variant="subtitle2"
        >
          FAQ
        </Typography>
      </div>

      {/* COMPANY */}
      <div className={classes.fiber}>
        <Typography className={classes.footerHeader} variant="h5">
          Company
        </Typography>
        <Typography
          component={Link}
          to="/"
          className={classes.footerLink}
          variant="subtitle2"
        >
          About
        </Typography>
        <Typography
          component={Link}
          to="/"
          className={classes.footerLink}
          variant="subtitle2"
        >
          Customers
        </Typography>

        <Typography
          component={Link}
          to="/"
          className={classes.footerLink}
          variant="subtitle2"
        >
          Blog
        </Typography>
      </div>

      {/* OPPORTUNITIES */}
      <div className={classes.fiber}>
        <Typography className={classes.footerHeader} variant="h5">
          Portfolios
        </Typography>
        <Typography
          component={Link}
          to="/"
          className={classes.footerLink}
          variant="subtitle2"
        >
          Sarah Andrews
        </Typography>

        <Typography
          component={Link}
          to="/"
          className={classes.footerLink}
          variant="subtitle2"
        >
          Mathiew Higgins
        </Typography>

        <Typography
          component={Link}
          to="/"
          className={classes.footerLink}
          variant="subtitle2"
        >
          Janice Dave
        </Typography>
      </div>
    </div>
  );
}
export default Footer;
