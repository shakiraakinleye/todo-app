import { useState } from "react";
import { ListHeader } from "./components/ListHeader";
import { TodoList } from "./components/TodoList";
import "./App.css"

let nextId = 3;

const initialTodo = {
  title: "",
  desc: "",
};

const initialList = [
  { id: 0, title: "Wash car", desc: "Have the engine cleaned", done: false },
  { id: 1, title: "Hair Salon", desc: "Make braids", done: true },
  { id: 2, title: "Grocery shopping", desc: "Get greek yogurt", done: false },
];


export function App() {

  const [todoList, setTodoList] = useState(initialList);
  const [newTodo, setNewTodo] = useState(initialTodo);


  function newTitleHandler(e) {
    setNewTodo({
      ...newTodo,
      title: e.target.value,
    });
  }

  function newDescHandler(e) {
    setNewTodo({
      ...newTodo,
      desc: e.target.value,
    });
  }

  function addBtnHandler() {
    setTodoList([
      ...todoList,
      {
        id: nextId++,
        title: newTodo.title,
        desc: newTodo.desc,
        done: false,
      },
    ]);
    setNewTodo(initialTodo);
  }
  
  function editTodoHandler(editedTodo) {
    setTodoList(
      todoList.map((todo) => {
        if (todo.id === editedTodo.id) {
          console.log(todo)
          console.log(editedTodo)
          return editedTodo;
        } else {
          return todo;
        }
      })
    );
  }
  
  function deleteBtnHandler(todoId) {
    setTodoList(todoList.filter((todo) => todo.id !== todoId));
  }

  return (
    <div className="app">
      <div className="app__container">
        <div className="app__content">
          <h1 className="app__title">My Todos</h1>
          <div className="app__body">
            <ListHeader
              titleChangeHandler={newTitleHandler}
              descChangeHandler={newDescHandler}
              addBtnHandler={addBtnHandler}
              newTodo={newTodo}
            />
            <TodoList
              todoList={todoList}
              onDeleteTodo={deleteBtnHandler}
              onEditTodo={editTodoHandler}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

 
