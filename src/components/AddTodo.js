import { Input } from "./Input";
import { Button } from "./Button";
import "./styles/addTodo.css";

export function AddTodo({ onTitleChange, onDescChange, onClickAddBtn, newTodo }) {
  return (
    <div className="add__todo">
      <div className="input__container">
        <Input
          fieldClass={"new__todo--field"}
          labelClass={"new__todo__label"}
          labelText={"Title"}
          inputClass={"new__todo__input"}
          inputId={"new__todo--title"}
          inputHint={"Type a task"}
          value={newTodo.title}
          onChange={onTitleChange}
          on
        />
        <Input
          fieldClass={"new__todo--field"}
          labelClass={"new__todo__label"}
          labelText={"Description"}
          inputClass={"new__todo__input"}
          inputId={"new__todo--desc"}
          inputHint={"Type a description"}
          value={newTodo.desc}
          onChange={onDescChange}
        />
      </div>
      <Button
        buttonClass={"btn--add__todo"}
        buttonText={"Add Todo"}
        onClick={onClickAddBtn}
      />
    </div>
  );
}

