import React from "react";
import { useHistory } from "react-router-dom";
import './Game.css';



const Game = ({ game, id }) => {
  const { nombre, img, lanzamiento, consola } = game;

  const history = useHistory();

  const goToDetails = () => {
    history.push(`/games/${id}`);
  };

  return (

   

      <div className=' col-sm-12 col-md-6 col-lg-4 col-xl-4'>

        <div className='card dib br3 pa3 ma2 grow bw2 shadow-5' style={{ width: '18rem' }} >

          <img alt="game" src={`/GamesClub/${img}`} className='card-img-top img-thumbnail' width='150px' height='130px' />

          <div className='card-body'>
            <h1 className='card-title'>{nombre}</h1>
            <h4 className='card-text'>Plataforma:{consola}</h4>
            <h6>Lanzamiento:{lanzamiento}</h6>
          </div>
          <button className="btn btn-info" onClick={goToDetails}>
            Info
      </button>
        </div>
      </div>
    
  );
};

export default Game;
