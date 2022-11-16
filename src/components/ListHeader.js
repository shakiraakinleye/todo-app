import { AddTodo } from "./AddTodo";
import "./styles/listHeader.css";

export function ListHeader() {
  return (
    <div className="list__header">
      <AddTodo />
    </div>
  );
}