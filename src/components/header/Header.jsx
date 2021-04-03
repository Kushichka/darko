import React from "react";
import style from "./Header.module.css";
import {NavLink} from "react-router-dom";

const Header = () => {
    return (
        <header>
            <NavLink to="/profile"><img className={style.logo} src="https://cdn.logo.com/hotlink-ok/logo-social-sq.png" alt="logo" /></NavLink>
        </header>
    );
}

export default Header;