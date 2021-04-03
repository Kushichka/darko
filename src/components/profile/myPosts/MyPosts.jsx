import React from "react";
import style from "./MyPosts.module.css";
import Post from "./post/Post";

const MyPosts = () => {
    return (
        <div>
            My Posts
            <div>
                <textarea></textarea>
                <button>Add post</button>
            </div>
            <div className={style.posts}>
                <Post message = "Its`s my first post" likes="15"/>
                <Post message = "Hi, how are you?" likes="20"/>
            </div>
        </div>
    );
}

export default MyPosts;