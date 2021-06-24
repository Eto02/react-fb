import firebase from 'firebase/app';
// import  'firebase/auth';
// import  'firebase/firestore';
var firebaseConfig = {
    apiKey: "AIzaSyDLI--M6H-UmpaTu0V3hm7T3XXhqq-8bDg",
    authDomain: "react-fb-01.firebaseapp.com",
    projectId: "react-fb-01",
    storageBucket: "react-fb-01.appspot.com",
    messagingSenderId: "1062163920097",
    appId: "1:1062163920097:web:551424669438df9fe0b3a0",
    measurementId: "G-RX60JCYG8Y"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase;