import { Todo } from "./Todo"
import "./styles/todoList.css";

export function TodoList({
  todoList,
  onEditTodo,
  onDeleteTodo
}) {
  function List() {
    const listItems = todoList.map((todo) => {
      return (
        <li key={todo.id}>
          <Todo
            todo={todo}
            onEditTodo={onEditTodo}
            onDeleteTodo={onDeleteTodo}
          />
        </li>
      );
    });
    return <ul className="todo__list">{listItems}</ul>;
  }

  return (
    <List />
  );
}