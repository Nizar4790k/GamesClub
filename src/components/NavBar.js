import React from 'react';
import './NavBar.css';
import {Link} from 'react-router-dom';

const NavBar = (props)=>{

    

    return(
        <div >
           <nav>
               <ul className="topnav">
                <li><Link>GamesClub</Link></li>
                <li><Link className="active"to={'/'}>Home</Link></li>
                <li><Link to={'/gamelist'}>Juegos</Link></li>  
                <li><Link to={'/about'}>About</Link></li>
               </ul>
               </nav>
         </div>

         
    )

}



export default NavBar;