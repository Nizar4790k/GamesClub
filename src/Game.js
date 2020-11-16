import React from 'react';

const Game = (props)=>{
    
    
return(
    <div className="br2 ba dark-gray b--black-10 mv4 w-100 w-50-m w-25-l mw5 center">
        <img alt='games'src={`${props.img}`}/>
            <div>
                <h2>Titulo:{props.nombre}</h2>
                <h4>Plataforma:{props.consola}</h4>
                <h6>Lanzamiento:{props.lanzamiento}</h6>
            </div>

    </div>
);

}

export default Game;