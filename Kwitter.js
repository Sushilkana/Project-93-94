function Save_Name() {
    User_Name = document.getElementById("User_Name").value;
    localStorage.setItem("User_Name",User_Name);
    console.log("User name is " + User_Name);
    window.location = "Kwitter_room.html";
}