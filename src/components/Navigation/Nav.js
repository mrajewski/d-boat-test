import React from 'react';
import copy from "../../copy";
import NavMenu from "./NavMenu";
import Burger from "./BurgerMenu";
import {Link} from "react-router-dom";

function Nav() {
    return (
        <nav className='nav'>
            <div className='wrapper nav-wrapper'>
                <Link to="/d-boat-test" className="nav-logo">
                </Link>
                <Burger list={copy.English.menu}/>
                <NavMenu/>
            </div>
        </nav>
    )
}


export default Nav