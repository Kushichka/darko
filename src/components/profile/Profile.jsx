import React from "react";
import style from "./Profile.module.css";
import MyPosts from "./myPosts/MyPosts";

const Profile = () => {
    return (
        <div className={style.content}>
            <div>
                <img className={style.content_img} src="https://fregataero.ru/images/tours/tours/2594.jpg" alt="" />
            </div>
            <div>
                ava + description
            </div>
            <MyPosts />
        </div>
    );
}

export default Profile;