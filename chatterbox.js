//YOUR FIREBASE LINKS
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var firebaseConfig = {
    apiKey: "AIzaSyA4floLwDUG2YTLk1WwwHIEhMiVduix7-4",
    authDomain: "chatfriends-2ac34.firebaseapp.com",
    databaseURL: "https://chatfriends-2ac34-default-rtdb.firebaseio.com",
    projectId: "chatfriends-2ac34",
    storageBucket: "chatfriends-2ac34.appspot.com",
    messagingSenderId: "770548234874",
    appId: "1:770548234874:web:2357649337825028bb59c3",
    measurementId: "G-9KGSFJZ9TT"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);


function addUser(){
    user_name = document.getElementById("user_name").value;
    pass_word = document.getElementById("password").value;
    
    firebase.database().ref("/").child(user_name).update({
        username: user_name,
        password: pass_word
    });
    localStorage.setItem("username", user_name);
    localStorage.setItem("password", pass_word);
    
    hint = "<h5 style='color: red;'> Enter a Username </h5>";
    if(user_name == ""){
        document.getElementById("hint").innerHTML = hint;
        console.log("no username");

    }else{
        window.location = "chatter_room.html";
        document.getElementById("hint").innerHTML = "";
    }
   
}

