
//ADD YOUR FIREBASE LINKS

// Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
    apiKey: "AIzaSyCpzWUW0Za6xGFRvvyJTR-FuKqvLXQmnhA",
    authDomain: "chatterbox-27529.firebaseapp.com",
    databaseURL: "https://chatterbox-27529-default-rtdb.firebaseio.com",
    projectId: "chatterbox-27529",
    storageBucket: "chatterbox-27529.appspot.com",
    messagingSenderId: "302925529569",
    appId: "1:302925529569:web:bde2671cd6428bdc3992a0",
    measurementId: "G-V5B6T3FXC0"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();
  function addUser(){
    user_name = document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        purpose : "adding user"
    });
}