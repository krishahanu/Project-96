var firebaseConfig = {
    apiKey: "AIzaSyBBhPbQ9sPVAb2tVjzRSsbi3SmGA-59lHQ",
    authDomain: "project-94-bf5ac.firebaseapp.com",
    databaseURL: "https://project-94-bf5ac-default-rtdb.firebaseio.com",
    projectId: "project-94-bf5ac",
    storageBucket: "project-94-bf5ac.appspot.com",
    messagingSenderId: "958914894328",
    appId: "1:958914894328:web:7fc3a7825bf479804ede0d"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

function addRoom()
{
      room_name =  document.getElementById("room_name").value;

      firebase.database().ref("/").child(room_name).update({
            purpose : "adding room name"
      });

      localStorage.setItem("room_name" , room_name);

      window.location = "kwitter_page.html";
}

function getData()
{
  firebase.database().ref("/").on('value',
  function(snapshot) {document.getElementById("output").innerHTML ="";
  snapshot.forEach(function(childSnapshot) {childKey = childSnapshot.key;
  Room_names = childKey;
  //Start code
  console.log("Room Name - " + Room_names);
  row = "<div class = 'room_name' id = " + Room_names + " onclick = 'redirectToRoomName(this.id)' >#" + Room_names + "</div><hr>";
  document.getElementById("output").innerHTML += row;
  //End code
});});
}
getData();

function redirectToRoomName(name)
{
      console.log(name);
      localStorage.setItem("room_name" , name);
      window.location = "kwitter_page.html";
}

logout()
{
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "index.html";
}
