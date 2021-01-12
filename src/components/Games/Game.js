import React from "react";

import { useHistory } from "react-router-dom";


const Game = ({ game, id }) => {
  const { nombre, img, lanzamiento, consola } = game;
  
  const history = useHistory();

  const goToDetails = () => {
    history.push(`/games/${id}`);
  };

  return (
    <div className="card dib br3 pa3 ma2 bw2 shadow-5" style={{width: '400px;'}} >
    
      <img alt="game" src={`${img}`} className="card-img-top img-thumbnail" />
      <div className="card-body">
        <h1 className="card-title">{nombre}</h1>
        <h4 className="card-text">Plataforma:{consola}</h4>
        <h6>Lanzamiento:{lanzamiento}</h6>
      </div>
      <button className="btn btn-info" onClick={goToDetails}>
        Info
      </button>
    </div>
  );
};

export default Game;
