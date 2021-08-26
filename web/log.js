
  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
    apiKey: "AIzaSyD4a-zMYTwtI_FryUFDG5uAaZq7byc3Q5g",
    authDomain: "duckfilms.firebaseapp.com",
    projectId: "duckfilms",
    storageBucket: "duckfilms.appspot.com",
    messagingSenderId: "241621694341",
    appId: "1:241621694341:web:f1a2107a5ec3cf5cd5b6ec",
    measurementId: "G-32JMY3J5C0"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const auth =  firebase.auth();

  //signIN function
  function  signIn(){
    var email = document.getElementById("email");
    var password  = document.getElementById("password");
    const promise = auth.signInWithEmailAndPassword(email.value,password.value);
    promise.catch(e=>alert(e.message));
    
      localStorage.setItem('session', 'true');
      window.location.replace("../");
  }


  //signOut

  function signOut(){
    auth.signOut();
    alert("SignOut Successfully from System");
    localStorage.setItem('session', 'null');
  }

  //active user to homepage
  firebase.auth().onAuthStateChanged((user)=>{
    if(user){
      var email = user.email;
      console.log("Użytkownik "+email + " aktywny");

    }else{
      console.log("Nie znaleziono sesji")
      localStorage.setItem('session', 'null');
      window.location.replace('login/');
    }
  })