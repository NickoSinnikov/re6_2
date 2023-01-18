import React from "react";

export default function Form(){
    return <form className="form" onSubmit={onSubmit}>
        <label className="form__label"></label>
        <input className="form__input" placeholder="Новая заметка..."/>
        <button className="btn">Добавить</button>
    </form>
}