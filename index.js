
  // Import the functions you need from the SDKs you need
  // import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
  // import { getDatabase,ref,set,child } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-analytics.js";



  <script src="https://www.gstatic.com/firebasejs/9.6.5/firebase-app.js"></script>
  <script src="https://www.gstatic.com/firebasejs/9.6.5/firebase-database.js"></script>

  // Your web app's Firebase configuration

  const firebaseConfig = {
    apiKey: "AIzaSyB0lug7ZYe4a1AwS02NMeUMly1XoYDRi1w",
    authDomain: "humidity-a833b.firebaseapp.com",
    databaseURL: "https://humidity-a833b-default-rtdb.firebaseio.com",
    projectId: "humidity-a833b",
    storageBucket: "humidity-a833b.appspot.com",
    messagingSenderId: "735893426058",
    appId: "1:735893426058:web:191eef06187aaba05b8273",
    measurementId: "G-VE3XDG56Y5"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getDatabase(app);

  const form = document.getElementById('myForm');

 form.addEventListener('submit', function (e) {
   e.preventDefault();

   // Get form data
   const name = form.elements.name.value;
   const email = form.elements.email.value;

   // Get a reference to the Firebase database
   const database = firebase.database();

   // Push data to the 'users' collection
   database.ref('users').push({
     name: name,
     email: email
   });

   // Optional: Clear form fields
   form.reset();
 });
