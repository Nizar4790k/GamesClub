//import logo from './logo.svg';
import './App.css';
import GameList from './GameList';
import { Component } from 'react';
import games from './data/game.json';
import NavBar from './NavBar';



class App extends Component {

    constructor() {
        super();
        this.state = { games: games };
        console.log(games);
    }
    render() {
        return (
            <div>
                <NavBar/>
                <GameList games={this.state.games}/>
            </div>
        )
    }

 

}

export default App;
