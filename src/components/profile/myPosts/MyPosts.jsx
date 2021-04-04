import React from "react";
import style from "./MyPosts.module.css";
import Post from "./post/Post";

const MyPosts = () => {

    let posts = [
        {id: 1, message: "Its`s my first post", likes: 15},
        {id: 2, message: "Hi, how are you?", likes: 20},
        {id: 3, message: "Blabla", likes: 20},
        {id: 4, message: "Dada", likes: 20}
    ]

    let postsElements =
        posts.map( p => <Post message={p.message} likes={p.likes}/>);

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