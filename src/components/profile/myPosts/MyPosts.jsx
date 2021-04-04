import React from "react";
import style from "./MyPosts.module.css";
import Post from "./post/Post";

const MyPosts = () => {
    return (
        <div className={style.postsBlock}>
            <h3>My Posts</h3>
            <div>
                <div>
                    <textarea></textarea>
                </div>
                <div>
                    <button>Add post</button>
                </div>
            </div>
            <div className={style.posts}>
                <Post message="Its`s my first post" likes="15"/>
                <Post message="Hi, how are you?" likes="20"/>
            </div>
        </div>
    );
}

export default MyPosts;