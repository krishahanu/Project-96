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
  user_name = localStorage.getItem("user_name");
  room_name = localStorage.getItem("room_name");

function send()
{
    msg = document.getElementById("msg").value;
    firebase.database().ref(room_name).push({
      name : user_name,
      message : msg,
      like : 0
    });
    document.getElementById("msg").value = "";
}