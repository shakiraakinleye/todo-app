export function updateStorage(updatedList){
    const todoListJSON = JSON.stringify(updatedList);
    localStorage.setItem("todoList", todoListJSON)
}


