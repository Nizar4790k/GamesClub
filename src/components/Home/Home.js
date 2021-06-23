import React from 'react';
import './Home.css';
import img from './ps_controller.png'



const Home = () =>{

    return (
        <div className="container">
         <h1>Games Club</h1>
         <br></br>
         <img src={img}></img>
         <br></br>
         <br></br>
         <br></br>
         <p>Esta plataforma trata sobre algunos juegos para las consolas Playstation y XBOX</p>
         <button className="btn btn-primary">Ver juegos</button>
         </div>
    );

}

export default Home;