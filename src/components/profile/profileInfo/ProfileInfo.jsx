import React from "react";
import style from "./ProfileInfo.module.css";

const ProfileInfo = () => {
    return (
        <div>
            <div>
                <img className={style.img} src="https://fregataero.ru/images/tours/tours/2594.jpg" alt="" />
            </div>
            <div className={style.descriptionBlock}>
                ava + description
            </div>
        </div>
    );
}

export default ProfileInfo;