import React from "react";
import style from "./Header.module.css";

const Header = () => {
    return (
        <header>
            <img className={style.logo} src="https://cdn.logo.com/hotlink-ok/logo-social-sq.png" alt="logo" />
        </header>
    );
}

export default Header;