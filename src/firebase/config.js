import  firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';

/* eslint-disable no-undef */
// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyCxhQmVzL4l0OhSomqQzwF98A5V4aEpV1A",
    authDomain: "ninja-firegram-a5a5d.firebaseapp.com",
    projectId: "ninja-firegram-a5a5d",
    storageBucket: "ninja-firegram-a5a5d.appspot.com",
    messagingSenderId: "154530926275",
    appId: "1:154530926275:web:8785d63de50f6123a45c76"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const projectStorage = firebase.storage();
 const projectFirestore = firebase.firestore();  
 const timestamp = firebase.firestore.FieldValue.serverTimestamp;
 export { projectStorage, projectFirestore ,timestamp};





