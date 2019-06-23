function saveUser(user){
    localStorage.setItem("users", JSON.stringify(user));
    console.log(user);
}

function getUser(){
    return JSON.parse(localStorage.getItem("users"));
}

export {saveUser, getUser};