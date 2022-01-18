const firebaseConfig = {
    apiKey: "AIzaSyC7-smen7a4Q15iOaIMbnHrO-8JrVtsgMA",
    authDomain: "let-s-chat-29ffa.firebaseapp.com",
    databaseURL: "https://let-s-chat-29ffa-default-rtdb.firebaseio.com",
    projectId: "let-s-chat-29ffa",
    storageBucket: "let-s-chat-29ffa.appspot.com",
    messagingSenderId: "744344248147",
    appId: "1:744344248147:web:c7dffc894ebcd0b8430ba6",
    measurementId: "G-7YDR97XJLV"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
    Room_names = childKey;
    

    
   });});}
getData();