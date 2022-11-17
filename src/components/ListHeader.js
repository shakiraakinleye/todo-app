import { AddTodo } from "./AddTodo";
import "./styles/ListHeader.css";

export function ListHeader() {
  return (
    <div className="list__header">
      <AddTodo />
    </div>
  );
}