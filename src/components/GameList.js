import React from 'react';
import 'tachyons';
import Game from './Game'
import games from '../data/game.json';
const GameList = ()=>{

    return(
        <div>
            {games.map((game,i)=>{
                return (<Game
                key = {i}
                id ={i}
                img={games[i].img}
                nombre={games[i].nombre}
                lanzamiento={games[i].lanzamiento}
                consola={games[i].consola}
                />);

            })}

            
        </div>
       
       
    );

}

export default GameList;