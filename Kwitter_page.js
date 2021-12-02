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

function Log_Out() {
    localStorage.removeItem("User Name");
    localStorage.removeItem("Room_Name");
    window.location = "Kwitter.html"
}

User_Name = localStorage.getItem("User_Name");
Room_Name = localStorage.getItem("Room_Name");

function Send() {
    message = document.getElementById("msg").value;
    firebase.database().ref(Room_Name).push({
        Name: User_Name,
        MSG: message,
        like: 0
    });
    document.getElementById("msg").value = "";
}

function Get_data(){
    firebase.database().ref("/"+Room_Name).on('value', function (snapshot) {
        document.getElementById("output").innerHTML = "";
        snapshot.forEach(function(childSnapshot){
            childkey = childSnapshot.key;
            childdata = childSnapshot.val();
            if (childkey != "purpose"){
                message_id =childkey;
                message_data = childdata;
                Nameid = message_data["Name"];
                message = message_data["MSG"];
                like = message_data["like"];
                nametag = "<h4 class='room_name' >" + User_Name + "<img src='tick.png' class='user_tick' hieght='30px' width='30px'> </h4>";
                messagetag = "<h4 class='message_h4'>" + message + "</h4>";
                likebutton  = "<button id='"+ message_id +"' value='"+ like +"' onclick='updatelike(this.id)' class='btn btn-warrning'>";
                spantag = "<span class='glyphicon glyphicon-thumbs-up'> Like:"+ like +" </span> </button> <hr>";

                row = nametag + messagetag + likebutton + spantag;
                document.getElementById("output").innerHTML += row;
            };
        })
    })
}
Get_data()

function updatelike(buttonid){
    like = document.getElementById(buttonid).value;
    updated_like = Number(like)+1;
    firebase.database().ref(Room_Name).child(buttonid).update({
        like: updated_like
    })
}