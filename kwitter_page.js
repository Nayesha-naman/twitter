//YOUR FIREBASE LINKS
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
    
user_name=localStorage.getItem("user_name");
room_name=localStorage.getItem("room_name");
function send() {
     msg=document.getElementById("msg").value
     firebase.database().ref(room_name).push({
           name:user_name,
           message:msg,
           like:0
     });

     document.getElementById("msg").value="";

     
}

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();
