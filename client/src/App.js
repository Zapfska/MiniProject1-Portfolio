import logo from "./logo.svg";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import Home from "./Home";
import Post from "./components/Post/Post";
import Show from "./components/Show/Show";

function App() {
  return (
    <>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/post" component={Post} />
        <Route path="/show" component={Show} />
      </Switch>
    </>
  );
}

export default App;
