import { AddTodo } from "./AddTodo";
import "./styles/listHeader.css";

export function ListHeader({
  titleChangeHandler,
  descChangeHandler,
  addBtnHandler,
  newTodo,
}) {
  return (
    <div className="list__header">
      {/* <div className="panel__add__content"> */}
        <AddTodo
          onTitleChange={titleChangeHandler}
          onDescChange={descChangeHandler}
          onClickAddBtn={addBtnHandler}
          newTodo={newTodo}
        />
      {/* </div> */}
    </div>
  );
}