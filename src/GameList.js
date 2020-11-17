import React from 'react';
import 'tachyons';
import Game from './Game'

const GameList = ({games})=>{

    return(
        <div>
            {games.map((game,i)=>{
                return (<Game
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