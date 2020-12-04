//import logo from './logo.svg';
import './App.css';
import GameList from './components/GameList';
import Home from './components/Home'
import { Component } from 'react';

import NavBar from "./components/NavBar"
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';



class App extends Component {

    
    render() {
        return (
           <Router>
               <NavBar/>
               <Switch>
                   <Route path="/" exact component={Home}></Route>
                   <Route path="/GameList" exact component={GameList}></Route>

               
               </Switch>
           </Router>
        )
    }

 

}

export default App;
