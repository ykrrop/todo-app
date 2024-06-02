"use client";

import { useState } from "react";

import Form from "./Form";
import TodoList from "./TodoList";
import Total from "./Total";
import Header from "./Header";

export default function Todo() {
  const [todos, setTodos] = useState([]);
  const [todo, setTodo] = useState({ name: "", isComplete: false });
  const totalComplete = todos.filter((todo) => todo.isComplete).length;
  const totalTodos = todos.length;
  return (
    <div>
      <Header />
      <Total totalComplete={totalComplete} totalTodos={totalTodos} />
      <Form todos={todos} setTodos={setTodos} todo={todo} setTodo={setTodo} />
      <TodoList todos={todos} setTodos={setTodos} />
    </div>
  );
}
