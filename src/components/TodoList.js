import { useContext } from "react";
import { Todo } from "./Todo"
import {TodoListContext} from "../TodoContext"
import "./styles/TodoList.css";

export function TodoList() {
  function List() {
    const todoList = useContext(TodoListContext)

    const listItems = todoList.map((todo) => {
      return (
        <li key={todo.id}>
          <Todo todo={todo} />
        </li>
      );
    });
    return <ul className="todo__list">{listItems}</ul>;
  }

  return (
    <List />
  );
}