// Tutorial no.  37 (part-11)//
import { useState } from "react";
import styles from "./Todo.module.css";
import Form from "./Form";
import TodoList from "./TodoList";
import Footer from "./Footer";

export default function Todo() {
  const [todos, setTodos] = useState([]);
  const completedTodos = todos.filter((todo) => todo.done).length;
  const notcompletedTodos = todos.filter((todo) => !todo.done).length;
  const totalTodos = todos.length;
  return (
    <div>
      <Form todos={todos} setTodos={setTodos} />
      <TodoList todos={todos} setTodos={setTodos} />
      <Footer
        completedTodos={completedTodos}
        totalTodos={totalTodos}
        notcompletedTodos={notcompletedTodos}
      />
    </div>
  );
}
