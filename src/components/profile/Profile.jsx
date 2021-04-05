import React from "react";
import MyPosts from "./myPosts/MyPosts";
import ProfileInfo from "./profileInfo/ProfileInfo";


const Profile = (props) => {
    return (
        <div>
            <ProfileInfo/>
            <MyPosts posts1={props.posts1}/>
        </div>
    );
}

export default Profile;
