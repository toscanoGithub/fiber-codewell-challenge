import {
  Avatar,
  Button,
  makeStyles,
  Paper,
  Typography,
} from "@material-ui/core";
import { BsStarFill, BsStarHalf } from "react-icons/bs";
import Footer from "./Footer";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "#FBF8F3",
    padding: "80px 10px",
  },

  landing: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",

    [theme.breakpoints.down("sm")]: {
      flexDirection: "column-reverse",
      justifyContent: "center",
    },
  },

  landingA: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "flex-start",

    [theme.breakpoints.down("sm")]: {
      alignItems: "center",
    },

    "&>h4": {
      paddingTop: 10,
      paddingBottom: 10,
      fontWeight: 700,
      fontSize: "1.7rem",
      textTransform: "capitalize",
    },
  },

  landingB: {
    "&>img": {
      maxHeight: "calc(100vh - 160px)",
      objectFit: "contain",

      [theme.breakpoints.down("md")]: {
        maxWidth: "90vw",
      },
    },
  },

  ratings: {
    display: "flex",
    alignItems: "center",
  },
  ratingStars: {
    color: "#FF9429",
    marginRight: 5,
  },

  landingControls: {
    marginTop: 10,
    display: "flex",
    justifyContent: "flex-start",
    "&>button": {
      marginRight: 10,
    },
  },
  landingOutlinedBtn: {
    color: "#3B54FA",
    backgroundColor: "transparent",
    "&:hover": {
      backgroundColor: "#3B54FA",
      color: "white",
    },
  },

  landingContainedBtn: {
    transition: "all 700ms ease",
    backgroundColor: "#3B54FA",
    color: "white",
    "&:hover": {
      backgroundColor: "#3B54FA",
      color: "white",
      opacity: 0.8,
    },
  },

  checkmarkImage: {
    height: 20,
    objectFit: "contain",
    marginRight: 5,
    marginLeft: 10,
  },

  promoList: {
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
    maxWidth: 500,
  },

  promoListItem: {
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
    margin: "0.5rem auto",
  },
  whyFiber: {
    boxShadow: "rgba(0, 0, 0, 0.06) 0px 2px 4px 0px inset",
    minWidth: "100%",
    backgroundColor: "white",
    marginTop: 30,
    padding: "20px 5px",
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
  },

  whyFiberHeader: {
    textAlign: "center",
    paddingBottom: 30,
    fontWeight: 700,
    fontSize: "1.4rem",
  },
  whyFiberList: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",

    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
      justifyContent: "center",
    },
    paddingBottom: 30,
  },

  whyFiberItem: {
    padding: 10,

    "&>h6": {
      fontWeight: 700,
      fontSize: "1rem",
    },
  },

  parallaxWrapper: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  parallax: {
    // clipPath: "ellipse(25% 40% at 50% 50%)",
    borderRadius: 10,
    position: "relative",
    minHeight: 500,
    flex: 1,
    backgroundImage:
      "url('https://www.moneyunder30.com/wp-content/uploads/2019/03/4-Step-Guide-For-How-To-Diversify-Your-Portfolio-1.jpg')",

    backgroundAttachment: "fixed",
    backgroundPosition: "right",
    backgroundRepeat: "no-repeat",
    backgroundSize: "contain",

    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
  nextToParallax: {
    [theme.breakpoints.down("sm")]: {
      backgroundColor: "red",
      flex: 0.7,
      // width: "100%",
      maxWidth: 600,
      minWidth: 400,
      backgroundColor: "#FBF8F3",
      padding: 30,
    },
    paddingRight: 20,
    flex: 0.3,
    // backgroundColor: "blue",
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    "&>h6": {
      fontWeight: 700,
      opacity: 0.8,
      textTransform: "uppercase",
    },
    "&>button": {
      marginTop: 20,
      backgroundColor: "#3B54FA",
      color: "white",

      "&:hover": {
        backgroundColor: "#3B54FA",
        color: "white",
        opacity: 0.8,
      },
    },
  },

  testemonials: {
    // maxWidth: 400,
    marginTop: 30,
    padding: 20,
    display: "grid",
    gridTemplateColumns: "1fr 1fr 1fr",
    placeItems: "center",
    gap: 10,
    [theme.breakpoints.down("md")]: {
      gridTemplateColumns: "1fr 1fr",
    },
    [theme.breakpoints.down("sm")]: {
      gridTemplateColumns: "1fr",
    },
    [theme.breakpoints.down("xs")]: {
      gridTemplateColumns: "1fr",
    },
  },
  testemonialsCard: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "center",
    padding: 20,
    borderRadius: 8,
    [theme.breakpoints.down("xs")]: {
      width: "100%",
    },
    [theme.breakpoints.down("sm")]: {
      maxWidth: 500,
    },
    "&>button": {
      color: "#3B54FA",
      marginTop: 10,

      "&:hover": {
        backgroundColor: "white",
        opacity: 0.8,
      },
    },
  },

  testoheader: {
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
    marginBottom: 10,
  },

  info: {
    marginLeft:10,
    "&>h4": {
      fontWeight: 700,
      fontSize: "1.2rem",
    },
    "&>h6": {
      fontSize: "1rem",
    },
    
  },
  avatar: {
    height: 70,
    width: 70,
  },
}));
function Home() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      {/* LANDING PAGE */}
      <div className={classes.landing}>
        <div className={classes.landingA}>
          <div className={classes.ratings}>
            <div className={classes.ratingStars}>
              {Array(4).fill(<BsStarFill />)}
              {Array(1).fill(<BsStarHalf />)}
            </div>
            <Typography variant="subtitle2">
              Rated 4.6 /5 (243 reviews)
            </Typography>
          </div>
          <Typography className={classes.landingAHeader} variant="h4">
            Create your portfolio in minutes.
          </Typography>
          <Typography variant="body2">
            With Fiber, you can setup your own personal portfolio in minutes
            with dozens of premade, beautiful templates.
          </Typography>
          <div className={classes.landingControls}>
            <Button
              className={classes.landingContainedBtn}
              disableElevation
              variant="contained"
            >
              Start Free Trial
            </Button>
            <Button className={classes.landingOutlinedBtn} variant="outlined">
              View Examples
            </Button>
          </div>

          <div className={classes.promoList}>
            <div className={classes.promoListItem}>
              <img
                className={classes.checkmarkImage}
                src="../images/Checkmark.svg"
                alt="checkmark"
              />
              <Typography>No Credit Card Required</Typography>
            </div>

            <div className={classes.promoListItem}>
              <img
                className={classes.checkmarkImage}
                src="../images/Checkmark.svg"
                alt="checkmark"
              />
              <Typography>10 Free Templates</Typography>
            </div>
          </div>
        </div>

        <div className={classes.landingB}>
          <img src="../images/hero-Illustration.png" alt="" srcset="" />
        </div>
      </div>

      {/* WHY FIBER */}

      <div className={classes.whyFiber}>
        <Typography variant="h3" className={classes.whyFiberHeader}>
          A Good Portfolio Means Good Employability.
        </Typography>

        <div className={classes.whyFiberList}>
          <div className={classes.whyFiberItem}>
            <img src="../images/time.svg" alt="time" />
            <Typography variant="h6">Build in minutes</Typography>
            <Typography variant="body2">
              With a selection of premade templates, you can build out a
              portfolio in less than 10 minutes.
            </Typography>
          </div>

          <div className={classes.whyFiberItem}>
            <img src="../images/code.svg" alt="time" />
            <Typography variant="h6">Add cutom CSS</Typography>
            <Typography variant="body2">
              Customize your personal portfolio even more with the ability to
              add your own custom CSS styles.
            </Typography>
          </div>

          <div className={classes.whyFiberItem}>
            <img src="../images/allSizes.svg" alt="time" />
            <Typography variant="h6">Responsive</Typography>
            <Typography variant="body2">
              All Fiber templates are fully responsive to ensure the experience
              is seemless across all devices.
            </Typography>
          </div>
        </div>

        <div className={classes.parallaxWrapper}>
          <div className={classes.nextToParallax}>
            <Typography variant="h6">Diversify your portfolio.</Typography>
            <Typography variant="body1">
              Create an even more impressive portfolio by creating case studies
              for your projects. Simply follow our step-by-step guide.
            </Typography>
            <Button fullWidth variant="outlined">
              Start Free Trial
            </Button>
          </div>
          <div className={classes.parallax}></div>
        </div>

        {/* TESTEMONIALS */}
        <div className={classes.testemonials}>
          <Paper elevation={1} className={classes.testemonialsCard}>
            <div className={classes.testoheader}>
              <Avatar
                className={classes.avatar}
                src="../images/User Avatar.svg"
              />
              <div className={classes.info}>
                <Typography variant="h4">Sarah Andrews</Typography>
                <Typography variant="h6">$100k in revenue</Typography>
              </div>
            </div>
            <div className={classes.testoCardBody}>
              <Typography variant="body2">
                Setting up my portfolio with Fiber took no more than 10 minutes.
                Since then, my portfolio has atracted a lot of clients and made
                me more than $100k.
              </Typography>
            </div>
            <Button fullWidth variant="outlined">
              View Sarah's Portfolio
            </Button>
          </Paper>

          <Paper elevation={1} className={classes.testemonialsCard}>
            <div className={classes.testoheader}>
              <Avatar
                className={classes.avatar}
                src="../images/User Avatar 2.svg"
              />
              <div className={classes.info}>
                <Typography variant="h4">Mathew Higgins</Typography>
                <Typography variant="h6">$20k in revenue</Typography>
              </div>
            </div>
            <div className={classes.testoCardBody}>
              <Typography variant="body2">
                I have been getting A LOT of leads ever since I used Fiber's
                premade templates, now I just need to work on my case studies
                and I'll be ready to go!
              </Typography>
            </div>
            <Button fullWidth variant="outlined">
              View Mathiew's Portfolio
            </Button>
          </Paper>

          <Paper elevation={1} className={classes.testemonialsCard}>
            <div className={classes.testoheader}>
              <Avatar
                className={classes.avatar}
                src="../images/User Avatar 32.svg"
              />
              <div className={classes.info}>
                <Typography variant="h4">Janice Dave</Typography>
                <Typography variant="h6">$30k in revenue</Typography>
              </div>
            </div>
            <div className={classes.testoCardBody}>
              <Typography variant="body2">
                I only just started freelancing this year and I have already
                made more than I ever made in my full-time job. The templates
                are just so amazing.
              </Typography>
            </div>
            <Button fullWidth variant="outlined">
              View Janice's Portfolio
            </Button>
          </Paper>
        </div>
      </div>

      {/* FOOTER */}
      <Footer />
    </div>
  );
}
export default Home;
