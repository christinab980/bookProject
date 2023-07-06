import React from 'react'; 
import data from "../navs/navs.json"
import { NavLink } from 'react-router-dom';

const Header = () => {
    const navs = data.map(nav => <NavLink key={nav.href} to={nav.href}>{nav.name}</NavLink>);

    return (
        <header>
            <div className="y-navs y-wrap">{navs} </div>
        </header>
    );
  };
  
  export default Header;
