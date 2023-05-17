
Username = localStorage.getItem("Username");
document.getElementById("name").innerHTML = "Welcome, " + Username;

function addRoom(){
room_name = document.getElementById("addRoom_input").value;
firebase.database().ref("/").child(room_name).update({
purpose: "adding roomname"
});

  }

localStorage.setItem("room_name",room_name);
window.location = "Kwitter_page.html";



