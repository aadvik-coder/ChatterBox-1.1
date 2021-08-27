//ADD YOUR FIREBASE LINKS HERE
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

user_name = localStorage.getItem("username");
pass_word = localStorage.getItem("password");

firebase.database().ref("/").child(user_name).update({
      username: user_name,
      password: pass_word
})

document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";

function addRoom() {
      room_name = document.getElementById("room_name").value;

      firebase.database().ref("/").child(room_name).update({
            purpose: "adding room name"
      });

      localStorage.setItem("room_name", room_name);

      window.location = "chatter_page.html";
}


function getData() {
      firebase.database().ref("/").on('value', function (snapshot) {
            document.getElementById("output").innerHTML = "";
            snapshot.forEach(function (childSnapshot) {
                  childKey = childSnapshot.key;
                  Room_names = childKey;
                  //Start code
                  console.log("Room name - " + Room_names);
                  row = "<div class='room_name' id=" + Room_names + " onclick='redirectToRoomName(this.id);' >" + Room_names + "</div><hr>";
                  document.getElementById("output").innerHTML += row;
                  //End code
            });
      });
}
getData();

function redirectToRoomName(name) {
      console.log(name);
      localStorage.setItem("room name", name);
      window.location = "chatter_page.html"

}

function logout() {
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "chatterbox.html"
}