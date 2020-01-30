import React, { useState } from "react";
import "./styles.css";
import TodoList from "./components/TodoList";
import todosData from "./todosData";
import Tabs from "./components/Tabs";
import Form from "./components/Form";

export default function App() {
  const [todos, setTodos] = useState(todosData);
  const [activeTab, setActiveTab] = useState("all");

  function handleChange(id) {
    const updatedTodos = todos.map(todo => {
      if (todo.id === id) {
        todo.completed = !todo.completed;
      }
      return todo;
    });

    setTodos(updatedTodos);
  }

  function handleDelete(id) {
    const updatedTodos = todos.filter(todo => todo.id !== id);
    setTodos(updatedTodos);
  }

  function handleChangeTab(tab) {
    setActiveTab(tab);
  }

  function handleForm(text) {
    const updatedTodos = [
      ...todos,
      {
        id: Math.random()
          .toString(16)
          .slice(-6),
        text: text,
        completed: false
      }
    ];
    setTodos(updatedTodos);
  }

  function filteredTodos() {
    let filteredTodos;

    if (activeTab === "undone") {
      filteredTodos = todos.filter(todo => todo.completed !== true);
    } else if (activeTab === "done") {
      filteredTodos = todos.filter(todo => todo.completed !== false);
    } else filteredTodos = todos;
    return filteredTodos;
  }

  return (
    <div>
      <Tabs activeTab={activeTab} handleChangeTab={handleChangeTab} />
      <TodoList
        todos={filteredTodos()}
        handleChange={handleChange}
        handleDelete={handleDelete}
      />
      <Form handleForm={handleForm} />
    </div>
  );
}
