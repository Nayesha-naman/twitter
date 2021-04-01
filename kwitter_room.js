
//ADD YOUR FIREBASE LINKS HERE

// Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
    apiKey: "AIzaSyAVIeaiHcT13vhSppoainh3kQtcCVEp81Y",
    authDomain: "kwitter-app-6da9c.firebaseapp.com",
    databaseURL: "https://kwitter-app-6da9c.firebaseio.com",
    projectId: "kwitter-app-6da9c",
    storageBucket: "kwitter-app-6da9c.appspot.com",
    messagingSenderId: "747621605116",
    appId: "1:747621605116:web:15da39039ac9ea341bc179",
    measurementId: "G-0C9WEC260L"
  };
// Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

  user_name=localStorage.getItem("user_name");
  document.getElementById("user_name").innerHTML="Welcome"+user_name;
  function addroom() {
    var room_name=document.getElementById("room_name").value;
    firebase.database().ref("/").child(room_name).update({
      purpose:"adding room name"

    });
    localStorage.setItem("room_name",room_name);
    window.location="kwitter_page.html";

  }

  function addRoom() 
  { 
    room_name = document.getElementById("room_name").value;
   firebase.database().ref("/").child(room_name).update({ purpose : "adding room name" });
   localStorage.setItem("room_name", room_name); 
   window.location = "kwitter_page.html"; 
  }


function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
     Room_names = childKey;
    //Start code
console.log("Room_names");
row=<div class='room_name' id='Room_names' onclick='redirectToRoomName(this.id)'>+Room_names+</div>
    //End code
    });});}
getData();

function logout() {
localStorage.removeItem("user_name");
localStorage.removeItem("room_name");
window.location="index.html";
}



