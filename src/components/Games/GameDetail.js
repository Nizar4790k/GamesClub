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


  return (
    <div className="container">
      <div className="title">
      <h1 className="card-title">Titulo:{game.nombre}</h1>
      </div>


      <img className="img-thumbnail" src={`/${game.img}`} alt="game" />

      <br></br>
      <p className="card-text"><b>Plataforma:</b>{game.consola}</p>
      <p className="card-text"><b>Sobre el juego:</b>{game.info}</p>
      <h3 className="card-text"><small>Lanzamiento:{game.lanzamiento}</small></h3>
     
      <button className="btn btn-danger btn-block" onClick={getBack}>Atras</button>
     
     

    </div>
  );
};

export default GameDetail;
