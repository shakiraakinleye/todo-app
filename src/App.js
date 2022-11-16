import { useReducer } from "react";
import { ListHeader } from "./components/ListHeader";
import { TodoList } from "./components/TodoList";
import { NewTodoContext, NewTodoDispatchContext, TodoListContext, TodoDispatchContext, TodoReducer, NewTodoReducer } from "./TodoContext";
import "./App.css"


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
  const [todoList, dispatchTodo] = useReducer(TodoReducer, initialList);
  const [newTodo, dispatchNewTodo] = useReducer(NewTodoReducer, initialTodo);

  
  return (
    <TodoListContext.Provider value={todoList}>
      <NewTodoContext.Provider value={newTodo}>
        <NewTodoDispatchContext.Provider value={dispatchNewTodo}>
          <TodoDispatchContext.Provider value={dispatchTodo}>
            <div className="app">
              <div className="app__container">
                <div className="app__content">
                  <h1 className="app__title">My Todos</h1>
                  <div className="app__body">
                    <ListHeader />
                    <TodoList />
                  </div>
                </div>
              </div>
            </div>
          </TodoDispatchContext.Provider>
        </NewTodoDispatchContext.Provider>
      </NewTodoContext.Provider>
    </TodoListContext.Provider>
  );
}

 
