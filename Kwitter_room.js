var firebaseConfig = {
    apiKey: "AIzaSyDM2mQ1l-GVZelPIQzBQ7E6xUYxp3Alw8s",
    authDomain: "project-93-94.firebaseapp.com",
    databaseURL: "https://project-93-94-default-rtdb.firebaseio.com",
    projectId: "project-93-94",
    storageBucket: "project-93-94.appspot.com",
    messagingSenderId: "278010903184",
    appId: "1:278010903184:web:03b49a54ac2fb82b99f615"
};
firebase.initializeApp(firebaseConfig);

User_Name = localStorage.getItem("User_Name");
console.log("The user name is: " + User_Name);
document.getElementById("welcome").innerHTML = "Kwitter Welcome You " + User_Name;

function Add_room(){
    Room_name = document.getElementById("Room_Name").value;
    localStorage.setItem("Room_Name",Room_name);
    console.log("The Room name is: " +  Room_name);
    firebase.database().ref("/").child(Room_name).update({});
    window.location = "Kwitter_Page.html";
}

function Log_out() {
    localStorage.removeItem("User_Name");
    localStorage.removeItem("Room_Name");
    window.location = "kwitter.html";
}

function getData() {
    firebase.database().ref("/").on('value', function (snapshot) {
        document.getElementById("Output").innerHTML = "";
        snapshot.forEach(function (childSnapshot) {
            childKey = childSnapshot.key;
            Room_names = childKey;
            row = "<div class='room_name' id=" + Room_names + " onclick='redirectToRoomName(this.id)' >#" + Room_names + "</div><hr>";
            document.getElementById("Output").innerHTML += row;
            console.log(row);
        });
    });
}
getData()

function redirectToRoomName(name_room) {
    console.log(name_room);
    localStorage.setItem("Room_Name", name_room);
    window.location = "Kwitter_Page.html";
}