import { createContext, useReducer } from "react";
import {updateStorage} from "./TodoStorage"

let nextId = 3;

const initialTodo = {
    title: "",
    desc: "",
};

const todoListJSON = localStorage.getItem("todoList")
const initialList = JSON.parse(todoListJSON)  

export const NewTodoContext = createContext(null)
export const TodoListContext = createContext(null)
export const TodoDispatchContext = createContext(null)
export const NewTodoDispatchContext = createContext(null)


export function TodoProvider ({children}){
    const [todoList, dispatchTodo] = useReducer(TodoReducer, initialList);
  const [newTodo, dispatchNewTodo] = useReducer(NewTodoReducer, initialTodo);
    return(
        <TodoListContext.Provider value={todoList}>
            <TodoDispatchContext.Provider value={dispatchTodo}>
                <NewTodoContext.Provider value={newTodo}>
                    <NewTodoDispatchContext.Provider value={dispatchNewTodo}>
                        {children}
                    </NewTodoDispatchContext.Provider>
                </NewTodoContext.Provider>
            </TodoDispatchContext.Provider>
        </TodoListContext.Provider>
    )
}


export function TodoReducer(todoList, action){
    switch(action.type) {
        case "added" : {
            const updatedList =   [
                ...todoList,
                {
                    id: nextId++,
                    title: action.title,
                    desc: action.desc,
                    done: false
                }
            ]
            updateStorage(updatedList);
            return [...updatedList]
        }
        case "edited" : {
            const updatedList = todoList.map((todo) => {
                if (todo.id === action.id) {
                  return action.todo;
                } else {
                  return todo;
                }
            })
            updateStorage(updatedList);
            return updatedList
        }
        case "deleted" : {
            const updatedList = todoList.filter((todo) => todo.id !== action.id);
            updateStorage(updatedList);
            return updatedList;
        }
        default : {
            throw Error(`${action.type} is not a valid action`)
        }
    }
}

export function NewTodoReducer(newTodo, action){
    switch(action.type){
        case "added--title" : {
            return ({
                ...newTodo,
                title: action.title,
              })
        }
        case "added--desc" : {
            return ({
                ...newTodo,
                desc: action.desc,
              })
        }
        case "reset" : {
            return ({
                title: "",
                desc: "",
              })
        }
        default : {
            throw Error(`${action.type} is not a valid action`)
        }
    }
}