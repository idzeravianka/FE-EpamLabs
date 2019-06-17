function saveData(data){
    localStorage.setItem("tasks", JSON.stringify(data, ["id", "task", "description", "date"]));
}

function saveUser(user){
    localStorage.setItem("users", JSON.stringify(user, ["username", "password"]));
}

function getData(){
    return JSON.parse(localStorage.getItem("tasks"));
}

function getUser(){
    return JSON.parse(localStorage.getItem("users"));
}

function removeItem(key){
    localStorage.removeItem(key);
}

export {saveData, getData, saveUser, getUser, removeItem};