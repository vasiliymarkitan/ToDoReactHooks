import React, { useState } from "react";
import "./Form.css";

export default function Form(props) {
  const [value, setValue] = useState("");

  function handleChange(e) {
    setValue(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    value && props.handleForm(value);
    setValue("");
  }

  return (
    <form className="todo-form" onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        placeholder="Введите текст"
        onChange={handleChange}
        value={value}
      />
      <input type="submit" value="Отправить" />
    </form>
  );
}
