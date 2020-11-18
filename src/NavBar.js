import React from 'react';
import './NavBar.css';

const NavBar = (props)=>{

    return(
        <div class="topnav">
            <a href="#GamesClub">GamesClub</a>
            <a  href="#home">Inicio</a>
            <a className="active" href="#news">Juegos</a>
            <a href="#about">Acerca de</a>
         </div>
    )

}

export default NavBar;