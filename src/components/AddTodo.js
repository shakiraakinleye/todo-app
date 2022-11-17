import { useContext } from "react";
import { NewTodoContext, NewTodoDispatchContext, TodoDispatchContext } from "../TodoContext";
import { Input } from "./Input";
import { Button } from "./Button";
import "./styles/AddTodo.css";

export function AddTodo() {
  const dispatchTodo = useContext(TodoDispatchContext);
  const dispatchNewTodo = useContext(NewTodoDispatchContext);
  const newTodo = useContext(NewTodoContext)

  return (
    <div className="add__todo">
      <form className="todo__form">
        <Input
          fieldClass={"new__todo--field"}
          labelClass={"new__todo__label"}
          labelText={"Title"}
          inputClass={"new__todo__input"}
          inputId={"new__todo--title"}
          inputHint={"Type a task"}
          value={newTodo.title}
          onChange={(e) => {
            dispatchNewTodo({
              type: "added--title",
              title: e.target.value,
            });
          }}
        />
        <Input
          fieldClass={"new__todo--field"}
          labelClass={"new__todo__label"}
          labelText={"Description"}
          inputClass={"new__todo__input"}
          inputId={"new__todo--desc"}
          inputHint={"Type a description"}
          value={newTodo.desc}
          onChange={(e) => {
            dispatchNewTodo({
              type: "added--desc",
              desc: e.target.value,
            });
          }}
        />
      </form>
      <Button
        buttonClass={"btn--add__todo"}
        buttonText={"Add Todo"}
        onClick={() => {
          if (newTodo.title !== "") {
            dispatchTodo({
              type: "added",
              title: newTodo.title,
              desc: newTodo.desc,
            })
            dispatchNewTodo({
              type: "reset"
            });
          }
          // else {
          //   dispatchTodo({
          //     type: "error",
          //     err: "No title added",
          //   })
          // }
        }}
      />
    </div>
  );
}

