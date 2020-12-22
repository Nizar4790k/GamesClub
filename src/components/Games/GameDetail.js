import React from "react";
import games from "../../data/game.json";
import "./GameDetail.css"

import { useHistory } from "react-router-dom";

const GameDetail = ({ match }) => {
  const idx = Number(match.params.id);
  const game = games[idx];

  const history = useHistory();
  
  const getBack= function (){
    history.push('/games');
  }






  console.log(game);

  return (
    <div className="container">
      <div className="title">
      <h1>Titulo:{game.nombre}</h1>
      </div>


      <img src={`${game.img}`} alt="Game img" width="200px" height="400px" />


      <h3>Plataforma:{game.consola}</h3>
      <p>Sobre el juego:{game.info}</p>
      <h3>Lanzamiento:{game.lanzamiento}</h3>
     
    



    
      
      <button onClick={getBack}>Atras</button>
     
     

    </div>
  );
};

export default GameDetail;
