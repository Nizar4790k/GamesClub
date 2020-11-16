import React from 'react';

const Game = (props)=>{
    
    const [nombre,consola,lanzamiento,img] = props;

    <div>
        <img alt='games'src={`${img}`}/>
            <div>
                <h2>Titulo:{nombre}</h2>
                <h4>Plataforma:{consola}</h4>
                <h6>Lanzamiento:{lanzamiento}</h6>
            </div>

    </div>


}

export default Game;