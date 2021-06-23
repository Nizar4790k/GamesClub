import React from 'react';
import './Home.css';
import img from './ps_controller.png'
import { Link } from 'react-router-dom';


const Home = () =>{

    return (
        <div className="container">
         <h1>Games Club</h1>
        
         <img src={img}></img>
         <p>Esta plataforma trata sobre algunos juegos para las consolas Playstation y XBOX</p>
         
         <Link to={"/games"} className="btn btn-primary"> Ver juegos</Link>
         </div>
    );

}

export default Home;