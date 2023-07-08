import React from 'react'; 
import data from "../navs/navs.json"
import { NavLink } from 'react-router-dom';
import logo from "../navs/logo.json"
import "/index.css"

const Header = () => {
    const navs = data.map(nav => <NavLink key={nav.href} to={nav.href}>{nav.name}</NavLink>);
    const home = logo.map(nav => <NavLink key={nav.href} to={nav.href}><img className="logo" src={nav.src} /> </NavLink>)

    return (
        <header>
            <div className="y-navs y-wrap">{home} {navs} </div>
        </header>
    );
};

export default Header;
