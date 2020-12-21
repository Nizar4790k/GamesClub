import React from 'react';
import Button from './Button';

import "./Game.css"
const Game = ({nombre,consola,lanzamiento,img,id})=>{
    
    
return(
    <div className="dib br3 pa3 ma2 grow bw2 shadow-5">
        <img alt='games'src={`${img}`} width='200px' height='200px'/>
            <div>
                <h1>{nombre}</h1>
                <h4>Plataforma:{consola}</h4>
                <h6>Lanzamiento:{lanzamiento}</h6>
            </div>
            <Button id={id}/>

    </div>

);

}

export default Game;