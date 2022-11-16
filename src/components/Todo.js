import { useState, useContext } from "react";
import {TodoDispatchContext} from "../TodoContext"
import { Input } from "./Input";
import { Button } from "./Button";
import "./styles/todo.css"

export function Todo({
  todo
}) {
  const [isEditing, setIsEditing] = useState(false);
  const dispatchTodo = useContext(TodoDispatchContext)

  let todoDisplay = isEditing ? (
    <div className="edit__todo">
      <Input
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
        <h1 className="todo__title">{todo.title}</h1>
        <p className="todo__desc">{todo.desc}</p>
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
