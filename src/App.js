import { makeStyles } from "@material-ui/core";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Authentication from "./components/Authentication";
import { Header } from "./components/Header";
import Home from "./components/Home";

const useStyles = makeStyles((theme) => ({
  root: {
    position: "relative",
    overflow: "hidden",
  },
}));
function App() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Router>
        <Header />

        <Switch>
          <Route path="/login" component={Authentication} />
          <Route path="/" component={Home} />
        </Switch>
      </Router>
    </div>
  );
}
export default App;
