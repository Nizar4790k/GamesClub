import React from "react";
import games from "../../data/game.json";

const GameDetail = ({ match }) => {
  const idx = Number(match.params.id);
  const game = games[idx];

  return (
    <div className="container">
      <h2>Game Details</h2>

      <p>{game.nombre}</p>
      <img src={game.img} alt="Game img" />

      <p>Consola: {game.consola}</p>
    </div>
  );
};

export default GameDetail;
