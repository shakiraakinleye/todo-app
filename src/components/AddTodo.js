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
          fieldClass={"new__todo__field"}
          labelClass={"new__todo__label new__todo__title__label"}
          labelText={"Title"}
          inputClass={"new__todo__input"}
          inputId={"new__todo__title"}
          inputHint={"Type a task"}
          value={newTodo.title}
          onChange={(e) => {
            dispatchNewTodo({
              type: "added--title",
              title: e.target.value,
            });
          }}
          onKeyDown={(e) => {
            if (e.key === "Enter"){
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
            }
          }}
        />
        <Input
          fieldClass={"new__todo__field"}
          labelClass={"new__todo__label"}
          labelText={"Description"}
          inputClass={"new__todo__input"}
          inputId={"new__todo__desc"}
          inputHint={"Type an description(optional)"}
          value={newTodo.desc}
          onChange={(e) => {
            dispatchNewTodo({
              type: "added--desc",
              desc: e.target.value,
            });
          }}
          onKeyDown={(e) => {
            if (e.key === "Enter"){
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
            }
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
        }}
      />
    </div>
  );
}

