export function updateStorage(updatedList){
    const todoListJSON = JSON.stringify(updatedList);
    localStorage.setItem("todoList", todoListJSON)
}

export function updateNextId(){
    if (localStorage.getItem("storedId") === null){
        localStorage.setItem("storedId", "1")
    }

    let storedId = JSON.parse(localStorage.getItem("storedId"))
    let nextId = storedId + 1;

    localStorage.setItem("storedId", JSON.stringify(nextId))
    return nextId;
}
