import { useState, useContext } from "react";
import {TodoDispatchContext} from "../TodoContext"
import { Input } from "./Input";
import { Button } from "./Button";
import "./styles/Todo.css"

export function Todo({
  todo
}) {
  const [isEditing, setIsEditing] = useState(false);
  const dispatchTodo = useContext(TodoDispatchContext)

  let todoDisplay = isEditing ? (
    <div className="edit__todo">
      <Input
        inputClass="edit__todo__input"
        value={todo.title}
        onChange={(e) =>
          dispatchTodo({
            type: "edited",
            id: todo.id,
            todo: {
              ...todo,
              title: e.target.value,
            }
          })
        }
      />
      <Input
        inputClass="edit__todo__input"
        value={todo.desc}
        onChange={(e) =>
          dispatchTodo({
            type: "edited",
            id: todo.id,
            todo: {
              ...todo,
              desc: e.target.value
            }
          })
        }
      />
    </div>
  ) : (
    <div className="todo">
      <input
        type="checkbox"
        className="todo__checkbox"
        defaultChecked={todo.done}
        onChange={() => {
          dispatchTodo({
            type: "edited",
            id: todo.id,
            todo: {
              ...todo,
              done: !todo.done
            }
          })
        }}
      ></input>
      <div className="todo__details">
        <h1 className={todo.done ? "todo__title checked" : "todo__title"}>{todo.title}</h1>
        <p className={todo.done ? "todo__desc checked" : "todo__desc"}>{todo.desc}</p>
      </div>
    </div>
  )

  let buttonDisplayed =  isEditing ? (
    <Button
      buttonClass={"btn--save__todo"}
      buttonText={"Save"}
      onClick={() => {
        setIsEditing(false);
      }}
    />
  ) : (
    <Button
      buttonClass={"btn--edit__todo"}
      buttonText={"Edit"}
      onClick={() => {
        setIsEditing(true);
      }}
    />
  )

  // fix: Input loses focus during edit

  return (
    <div className="todo__container">
      {todoDisplay}
      <div className="btns__container">
        {buttonDisplayed}
        <Button
          buttonClass={"btn--delete__todo"}
          buttonText={"Delete"}
          onClick={() => {
            dispatchTodo({
              type: "deleted",
              id: todo.id,
            })
          }}
        />
      </div>
    </div>
  );
}
