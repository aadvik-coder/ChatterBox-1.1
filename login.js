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


function LogIn() {
    user_name = document.getElementById("user_name").value;
    pass_word = document.getElementById("password").value;
    user = localStorage.getItem("username", user_name);

    function getData() {
        firebase.database().ref("/" + user).on('value', function (snapshot) {
            snapshot.forEach(function (childSnapshot) {
                childKey = childSnapshot.key;
                childData = childSnapshot.val();
                if (childKey != "purpose") {
                    user_data = childData;
                    
                    //Start code
                    loginUsername = user_data["username"];
                    loginPassword = user_data["password"];
                    console.log(loginUsername);
                    console.log(loginPassword);
                    if (user_name == loginUsername && pass_word == loginPassword) {
                        localStorage.setItem("username", user_name);
                        localStorage.setItem("password", pass_word);
                        window.location = "chatter_room.html";
                        document.getElementById("hint").innerHTML = "";
                        
                        
                    } else {
                        badboy = "<h5 style='color: red;> Incorrect Username or Password </h5>"
                        document.getElementById("hint").innerHTML = badboy;
                        console.log("It worked");
                    }



                    //End code
                }
            });
        });
    }
    getData();
}