import { useState } from "react";
import { Input } from "./Input";
import { Button } from "./Button";
import "./styles/todo.css"

export function Todo({
  todo,
  onDeleteTodo,
  onEditTodo
}) {
  const [isEditing, setIsEditing] = useState(false);

  return (
    <div className="todo__container">
      {isEditing ? (
        <div className="edit__todo">
          <Input
            // inputClass={"edit__todo__input"}
            value={todo.title}
            onChange={(e) =>
              onEditTodo({
                ...todo,
                title: e.target.value,
              })
            }
          />
          <Input
            // inputClass={"edit__todo__input"}
            value={todo.desc}
            onChange={(e) =>
              onEditTodo({
                ...todo,
                desc: e.target.value,
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
            onChange={(e) => {
              onEditTodo({
                ...todo,
                done: !todo.done,
              });
              console.log(!todo.done);
            }}
          ></input>
          <div className="todo__details">
            <h1 className="todo__title">{todo.title}</h1>
            <p className="todo__desc">{todo.desc}</p>
          </div>
        </div>
      )}

      <div className="btns__container">
        {isEditing ? (
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
        )}

        <Button
          buttonClass={"btn--delete__todo"}
          buttonText={"Delete"}
          onClick={() => onDeleteTodo(todo.id)}
        />
      </div>
    </div>
  );
}
