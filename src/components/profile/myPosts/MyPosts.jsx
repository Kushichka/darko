import React from "react";
import style from "./MyPosts.module.css";
import Post from "./post/Post";

const MyPosts = (props) => {
        let postsElements =
        props.posts1.map( p => <Post message={p.message} likes={p.likes}/>);

        let newPostElement = React.createRef();

        let addPost = () => {
            props.addPost();
        }

        let onPostChange = () => {
            let text = newPostElement.current.value;
            props.updateNewPostText(text);

        }

    return (
        <div className={style.postsBlock}>
            <h3>My Posts</h3>
            <div>
                <div>
                    <textarea onChange={onPostChange} ref={newPostElement} value={props.newPostText}/>
                </div>
                <div>
                    <button onClick={addPost}>Add post</button>
                </div>
            </div>
            <div className={style.posts}>
                {postsElements}
            </div>
        </div>
    );
}

export default MyPosts;