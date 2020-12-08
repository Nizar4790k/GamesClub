import React from 'react';
import './NavBar.css';
import {Link, NavLink} from 'react-router-dom';

const NavBar = (props)=>{

    

    return(
        <div >
           <nav>
               <ul className="topnav">
                <li><Link to={'/'}>GamesClub</Link></li>
                <li><NavLink activeClassName="active" to={'/gamelist'}>Juegos</NavLink></li>  
                <li><NavLink activeClassName="active" to={'/about'}>About</NavLink></li>
               </ul>
               </nav>
         </div>

         
    )

}



export default NavBar;