import React from "react";
import style from "./Dialogs.module.css";
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
    let path  = "/dialogs/" + props.id;
    return (
        <div className={style.dialog + ' ' + style.active}>
        <NavLink to={path}>{props.name}</NavLink>
    </div>
    );
}

const Message = (props) => {
    return (
        <div className={style.dialog}>{props.message}</div>
    );
}

const Dialogs = (props) => {
    return (
      <div className={style.dialogs}>
          <div className={style.dialogsItems}>
              <DialogItem name="Dimych" id="1"/>
              <DialogItem name="Andrey" id="2"/>
              <DialogItem name="Sveta" id="3"/>
              <DialogItem name="Sasha" id="4"/>
              <DialogItem name="Viktor" id="5"/>
              <DialogItem name="Valera" id="6"/>
          </div>
          <div className={style.messages}>
              <Message message="Hi"/>
              <Message message="Hi is your day?"/>
              <Message message="Yo"/>
              <Message message="Yo"/>
              <Message message="Yo"/>
          </div>
      </div>
    );
}

export default Dialogs;