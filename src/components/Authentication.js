import {
  Button,
  Checkbox,
  FormControlLabel,
  FormGroup,
  makeStyles,
  TextField,
  Typography,
  withTheme,
} from "@material-ui/core";
import { useState } from "react";
import { Link } from "react-router-dom";
const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginLeft: "5vw",
    height: "100vh",
    [theme.breakpoints.down("sm")]: {
      justifyContent: "center",
      marginLeft: 0,
    },
  },
  floatingSection: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: "100%",
    width: "50vw",
    position: "absolute",
    right: 0,
    top: 0,
    backgroundColor: "#3B54FA",
    "&>img": {
      height: 300,
      objectFit: "cover",
    },

    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },

  description: {
    textAlign: "center",
    color: "white",
  },

  headerDescription: {
    fontWeight: 700,
  },

  textDescription: {
    fontWeight: 600,
    maxWidth: "25vw",
    textAlign: "center",
    margin: "0 auto",
  },
  inputWrapper: {
    marginBottom: 15,
    width: "100%",
    display: "flex",
    flexDirection: "column",
    rowGap: 3,

    "&>label": {
      fontWeight: 600,
      fontSize: "0.8rem",
    },
  },

  myInput: {
    backgroundColor: "#F7F7F7",
    padding: "5px 10px",
  },

  loginForm: {
    marginTop: "5vh",
    padding: 30,
    // backgroundColor: "beige",
    maxWidth: "40vw",
    [theme.breakpoints.down("sm")]: {
      maxWidth: "90vw",
    },
  },

  loginFormHeader: {
    textAlign: "center",
    fontWeight: 700,
    padding: 15,
    opacity: 0.8,
  },

  loginFormLinks: {
    textDecoration: "none",
    color: "#3B54FA",
    cursor: "pointer",
    opacity: 0.7,
    "&:hover": {
      color: "black",
      opacity: 0.8,
    },
  },

  registerBtn: {
    backgroundColor: "#3B54FA",
    color: "white",
    marginTop: 30,
    "&:hover": {
      opacity: 0.8,
      backgroundColor: "#3B54FA",
      color: "white",
    },
  },
  controls: {
    display: "grid",
    placeItems: "center",
    gap: 5,
  },
}));
function Authentication() {
  const classes = useStyles();
  const [alreadyHaveAnAccount, setAlreadyHaveAnAccount] = useState(false);

  const [state, setState] = useState({
    checked: false,
  });

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };
  const handleSubmit = (e) => {
    e.preventdefault();
  };
  return (
    <div className={classes.root}>
      <div className={classes.loginForm}>
        {!alreadyHaveAnAccount ? (
          <Typography className={classes.loginFormHeader} variant="h5">
            Create Your Fiber Account
          </Typography>
        ) : (
          <Typography className={classes.loginFormHeader} variant="h5">
            Sign In{" "}
          </Typography>
        )}
        <form onSubmit={handleSubmit}>
          {!alreadyHaveAnAccount && (
            <div className={classes.inputWrapper}>
              <label id="name" name="name" htmlFor="name">
                Your Name
              </label>
              <TextField
                InputProps={{
                  disableUnderline: true,
                  className: classes.myInput,
                }}
                // variant="outlined"
                name="name"
                placeholder="John Doe"
              />
            </div>
          )}

          <div className={classes.inputWrapper}>
            <label id="email" name="email" htmlFor="email">
              E-mail
            </label>
            <TextField
              InputProps={{
                disableUnderline: true,
                className: classes.myInput,
              }}
              name="email"
              placeholder="john@example.com"
            />
          </div>

          <div className={classes.inputWrapper}>
            <label id="name" name="password" htmlFor="password">
              Password
            </label>
            <TextField
              InputProps={{
                disableUnderline: true,
                className: classes.myInput,
              }}
              name="password"
              placeholder="At least 8 characters"
            />
          </div>

          <FormGroup className="">
            <FormControlLabel
              control={
                <Checkbox
                  checked={state.checked}
                  onChange={handleChange}
                  name="checked"
                  color="primary"
                />
              }
              label="By creating an account on Fiber, you agree to the "
            />{" "}
            <Link className={classes.loginFormLinks}>Terms & Conditions</Link>
          </FormGroup>
          <div className={classes.controls}>
            <Button
              fullWidth
              disableElevation
              className={classes.registerBtn}
              variant="contained"
            >
              {alreadyHaveAnAccount ? "Sign In" : "Create fiber Account"}
            </Button>
            {!alreadyHaveAnAccount && (
              <Typography>
                Already have an account?
                <Link
                  className={classes.loginFormLinks}
                  onClick={() => setAlreadyHaveAnAccount(true)}
                >
                  &nbsp; Sign In
                </Link>
              </Typography>
            )}
          </div>
        </form>
      </div>
      <div className={classes.floatingSection}>
        <img src="../images/Sign_Up_Image.png" alt="sign up pic" />
        <div className={classes.description}>
          <Typography variant="h4" className={classes.headerDescription}>
            Unparalleled Templates
          </Typography>
          <Typography variant="body1" className={classes.textDescription}>
            Crafted by a team of professional designers, our templates are
            eunparalleled in the market.
          </Typography>
        </div>
      </div>
    </div>
  );
}
export default Authentication;
