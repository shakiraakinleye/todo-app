export function TodoReducer(todoList, action){
    switch(action.type) {
        case "added" : {
            return [
                ...todoList,
                {
                    id: action.id,
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