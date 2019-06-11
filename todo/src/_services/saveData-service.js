function saveData(data){
    localStorage.setItem("tasks", JSON.stringify(data, ["id", "task"]));
}

function getData(){
    return JSON.parse(localStorage.getItem("tasks"));
}

export {saveData, getData};