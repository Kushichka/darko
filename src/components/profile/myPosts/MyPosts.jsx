import React from "react";
import style from "./MyPosts.module.css";
import Post from "./post/Post";

const MyPosts = (props) => {
        let postsElements =
        props.posts1.map( p => <Post message={p.message} likes={p.likes}/>);

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
                {postsElements}
            </div>
        </div>
    );
}

export default MyPosts;