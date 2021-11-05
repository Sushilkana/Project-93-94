User_Name = localStorage.getItem("User_Name");
// document.getElementById("welcome").innerHTML = User_Name;
console.log(User_Name);


var firebaseConfig = {
    apiKey: "AIzaSyDM2mQ1l-GVZelPIQzBQ7E6xUYxp3Alw8s",
    authDomain: "project-93-94.firebaseapp.com",
    databaseURL: "https://project-93-94-default-rtdb.firebaseio.com",
    projectId: "project-93-94",
    storageBucket: "project-93-94.appspot.com",
    messagingSenderId: "278010903184",
    appId: "1:278010903184:web:7ebbfd3ac2484bef99f615"
};
firebase.initializeApp(firebaseConfig);

function Add_Room() {
    Room_Name = document.getElementById("Room_Name").value;
    localStorage.setItem("Room_Name", Room_Name);
    console.log(Room_Name);
    firebase.database().ref("/").child(Room_Name).update({ purpose: "adding user..." })
}