import { ListHeader } from "./components/ListHeader";
import { TodoList } from "./components/TodoList";
import { TodoProvider } from "./TodoContext";
import "./App.css"

export function App() {
  return (
    <TodoProvider>
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
    </TodoProvider>
  );
}

 
