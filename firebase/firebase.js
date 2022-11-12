
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-app.js";
  import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-auth.js";
  import { getDatabase,ref, set } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-database.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyAb0wgYrHqSqKNctq--ws-i-R5fgm88-Tk",
    authDomain: "attendance-management-sy-39bc6.firebaseapp.com",
    projectId: "attendance-management-sy-39bc6",
    storageBucket: "attendance-management-sy-39bc6.appspot.com",
    messagingSenderId: "834125690318",
    appId: "1:834125690318:web:a409609a5ed328792fa79f"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);
  const database = getDatabase();








  





let login_btn = document.getElementById('login_btn')

login_btn.addEventListener("click", function () {
    let email = document.getElementById('login_email').value
    let password = document.getElementById('login_password').value
    signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            alert('Succesfully Logged In')
            window.location.href = '../Dashboard.html'
            // ...
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            alert('Wrong Info')
        });

})



