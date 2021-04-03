import React from "react";
import style from "./Nav.module.css";

const Nav = () => {
    return (
        <nav>
            <div className={style.item}>
                <a href="#">Profile</a>
            </div>
            <div className={style.item}>
                <a href="#">Message</a>
            </div>
            <div className={style.item}>
                <a href="#">News</a>
            </div>
            <div className={style.item}>
                <a href="#">Music</a>
            </div>
            <div className={style.item}>
                <a href="#">Settings</a>
            </div>
        </nav>
    );
}

export default Nav;