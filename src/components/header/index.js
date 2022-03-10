import React from 'react';
import './header.scss';
const Header = () => 
{
return(
    <header className="header">
     <a>SHOULD YOU <span>DO IT</span></a>  
     <ul>
         <li><a>HOME</a></li>
         <li><a>GALLERY</a></li>
     </ul> 
    </header>
);  
}

export default Header;