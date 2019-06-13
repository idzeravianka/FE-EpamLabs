function saveData(data){
    localStorage.setItem("tasks", JSON.stringify(data, ["id", "task", "description", "date"]));
}

function getData(){
    return JSON.parse(localStorage.getItem("tasks"));
}

export {saveData, getData};