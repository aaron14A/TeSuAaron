import firebase from 'firebase';
require('@firebase/firestore');


  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyAMlEW6bM3E8-Q8kgPmuaQEG_RU_7Z82UA",
    authDomain: "testu-4ef2c.firebaseapp.com",
    databaseURL: "https://testu-4ef2c.firebaseio.com",
    projectId: "testu-4ef2c",
    storageBucket: "testu-4ef2c.appspot.com",
    messagingSenderId: "159785201599",
    appId: "1:159785201599:web:652c96463348352bcf7b0a"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore();