import React from 'react';
import { Link } from 'react-router-dom';

import { AreaHeader } from './styled'

function Header(){
    return(
        <AreaHeader>
           <div className="container">
                <div className="logo">
                    <img src="../../../lojasmm1.png" />   
                </div>   
               
                <nav>
                    <ul>
                        <li><Link to="/home">Inicio</Link></li>
                        <li><Link to="/logout">Sair</Link></li>
                    </ul>
            </nav>
            </div>     
        </AreaHeader>
    );

}

export default Header;