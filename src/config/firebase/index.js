import firebase from 'firebase/app';
import  'firebase/auth';
import  'firebase/database';
// import  'firebase/firestore';
var firebaseConfig = {
  apiKey: "AIzaSyD4tn5IC6t37TS70mhhrOfgIlxb7UvvKWY",
  authDomain: "new-react-fb.firebaseapp.com",
  projectId: "new-react-fb",
  storageBucket: "new-react-fb.appspot.com",
  messagingSenderId: "985785192463",
  appId: "1:985785192463:web:dd233f2f2732e75b69937a",
  measurementId: "G-8JJ49L9D5M"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export const database= firebase.database();

  export default firebase;