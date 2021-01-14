//import logo from './logo.svg';
import "./App.css";
import GameList from "./components/Games/GameList";
import GameDetails from "./components/Games/GameDetail";
import Home from "./components/Home/Home";
import { Component } from "react";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NavBar from "./components/Navbar/NavBar";
import About from "./components/About/About";

class App extends Component {
  render() {
    return (
      <Router>
        <NavBar />
        <Switch>
          <Route path="/" exact component={Home}></Route>
          <Route path="/games" exact component={GameList}></Route>
          <Route path="/games/:id" exact component={GameDetails}></Route>
          <Route path="/about" exact component={About}></Route>
        </Switch>
      </Router>
    );
  }
}

export default App;
