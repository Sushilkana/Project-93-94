function Save_Name() {
    User_Name = document.getElementById("User_Name").value;
    G_Mail = document.getElementById("G_Mail").value;
    Password = document.getElementById("Password").value;
    localStorage.setItem("User_Name",User_Name);
    localStorage.setItem("G_Mail",G_Mail);
    localStorage.setItem("Password",Password);
    console.log("User name is " + User_Name);
    console.log("G Mail id is " + G_Mail);
    console.log("Password is " + Password);
    window.location = "Kwitter_room.html";
}