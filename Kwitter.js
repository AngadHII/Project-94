function addUser(){
Username = document.getElementById("Username").value;
localStorage.setItem("Username", Username);
window.location = "Kwitter_room.html";
}

