import React from "react";

import { useHistory } from "react-router-dom";

import "./Game.css";

const Game = ({ game, id }) => {
  const { nombre, img, lanzamiento, consola } = game;

  const history = useHistory();

  const goToDetails = () => {
    history.push(`/games/${id}`);
  };

  return (
    <div className="dib br3 pa3 ma2 grow bw2 shadow-5">
      <img alt="games" src={`${img}`} width="200px" height="200px" />
      <div>
        <h1>{nombre}</h1>
        <h4>Plataforma:{consola}</h4>
        <h6>Lanzamiento:{lanzamiento}</h6>
      </div>
      <button className="button" onClick={goToDetails}>
        Info
      </button>
    </div>
  );
};

export default Game;
