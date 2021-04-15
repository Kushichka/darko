let store = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: "Its`s my first post", likes: 15},
                {id: 2, message: "Hi, how are you?", likes: 20},
                {id: 3, message: "Blabla", likes: 20},
                {id: 4, message: "Dada", likes: 20}
            ],
            newPostText: 'it-kamasutra.com'
        },
        dialogsPage: {
            messages: [
                {id: 1, message: "Hi"},
                {id: 2, message: "Hi is your day?"},
                {id: 3, message: "Yo"},
                {id: 4, message: "Yo"},
                {id: 5, message: "Yo"}
            ],
            newMessageText: 'hello world',
            dialogs: [
                {id: 1, img: "" ,name: "Dimych"},
                {id: 2, name: "Andrey"},
                {id: 3, name: "Sveta"},
                {id: 4, name: "Sasha"},
                {id: 5, name: "Viktor"},
                {id: 6, name: "Valera"}
            ]
        }
    },
    getState() {
        return this._state;
    },
    _callSubscriber(){
        console.log("state changed");
    },
    addPost(){
        let newPost = {
            id: 5,
            message: this._state.profilePage.newPostText,
            likes: 0
        };
        this._state.profilePage.newPostText = '';
        this._state.profilePage.posts.push(newPost);
        this._callSubscriber(this._state);
    },
    updateNewPostText(newText) {
        this._state.profilePage.newPostText = newText;
        this._callSubscriber(this._state);
    },
    addMessage() {
        let newMessage = {
            id: 6,
            message: this._state.dialogsPage.newMessageText
        };
        this._state.dialogsPage.newMessageText = '';
        this._state.dialogsPage.messages.push(newMessage);
        this._callSubscriber(this._state);
    },
    updateMessageText(newText) {
        this._state.dialogsPage.newMessageText = newText;
        this._callSubscriber(this._state);
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    }
}

export default store;
window.store = store;