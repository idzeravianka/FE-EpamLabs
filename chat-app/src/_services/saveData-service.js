function saveUser(user){
    localStorage.setItem("users", JSON.stringify(user, ["email", "password"]));
}

function getUser(){
    return JSON.parse(localStorage.getItem("users"));
}

export {saveUser, getUser};