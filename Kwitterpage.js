var firebaseConfig = {
    apiKey: "AIzaSyAZXfQ2uPpgpcX0tUYV6lq7LUHluhGZmqQ",
    authDomain: "let-chat-web-app-f948e.firebaseapp.com",
    projectId: "let-chat-web-app-f948e",
    storageBucket: "let-chat-web-app-f948e.appspot.com",
    messagingSenderId: "1034409836858",
    appId: "1:1034409836858:web:c8913ded1b02e7e450d003",
    measurementId: "G-BX0QQWMERN"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

  user_name=localStorage.getItem("user_name");
  room_name=localStorage.getItem("room_name");
  
  function send()
  {
      msg=document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
          name1:user_name,
          message:msg,
         like:0
      });
      document.getElementById("msg").value="";
  }