import { createContext } from "react";

let nextId = 3;

export const NewTodoContext = createContext(null)
export const TodoListContext = createContext(null)
export const TodoDispatchContext = createContext(null)
export const NewTodoDispatchContext = createContext(null)


export function TodoReducer(todoList, action){
    switch(action.type) {
        case "added" : {
            return [
                ...todoList,
                {
                    id: nextId++,
                    title: action.title,
                    desc: action.desc,
                    done: false
                }
            ]
        }
        case "edited" : {
            return (
                todoList.map((todo) => {
                  if (todo.id === action.id) {
                    return action.todo;
                  } else {
                    return todo;
                  }
                })
            )
        }
        case "deleted" : {
            return todoList.filter((todo) => todo.id !== action.id)
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