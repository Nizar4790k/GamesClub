import React from "react";
import "tachyons";
import Game from "./Game";
import games from "../../data/game.json";

const GameList = () => {
  return (
    <div>
      {games.map((game, i) => {
        return <Game key={i} game={game} id={i} />;
      })}
    </div>
  );
};

export default GameList;
