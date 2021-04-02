import React from "react";
import style from "./Profile.module.css";

const Profile = () => {
    return (
        <div className={style.content}>
            <div>
                <img className={style.content_img} src="https://fregataero.ru/images/tours/tours/2594.jpg" alt="" />
            </div>
            <div>
                ava + description
            </div>
            <div>
                my posts
                <div>
                    new post
                </div>
                <div>
                    post 1
                </div>
                <div>
                    post 2
                </div>
            </div>
        </div>
    );
}

export default Profile;