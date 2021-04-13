import React from "react";
import style from "./Dialogs.module.css";
import DialogItem from "./dialogItem/DialogItem";
import Message from "./message/Message";

const Dialogs = (props) => {

    let dialogsElements = props.dialogsPage.dialogs.map(d => <DialogItem name={d.name} id={d.id}/>);
    let messagesElements = props.dialogsPage.messages.map(m => <Message message={m.message}/>);

    let messageRef = React.createRef();
    let sendMessage =  () => {
        props.addMessage();
    };

    let onWriteMessage = () => {
        let text = messageRef.current.value;
        props.updateMessageText(text);
    }

    return (
        <div>
            <div className={style.dialogs}>
                <div className={style.dialogsItems}>
                    {dialogsElements}
                </div>
                <div className={style.messages}>
                    {messagesElements}
                </div>
            </div>
            <div className={style.addMsg}>
                <div>
                    <textarea onChange={onWriteMessage} ref={messageRef} value={props.dialogsPage.newMessageText}/>
                </div>
                <div>
                    <button onClick={sendMessage}>Send</button>
                </div>
            </div>
        </div>
    );
}

export default Dialogs;