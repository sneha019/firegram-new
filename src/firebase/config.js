import  firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyCvw8LPvFWELt_X3Y1xKPLbZ_g6EQ3RKnc",
  authDomain: "gram-firebase.firebaseapp.com",
  projectId: "gram-firebase",
  storageBucket: "gram-firebase.appspot.com",
  messagingSenderId: "65226373867",
  appId: "1:65226373867:web:b9685f2f656000563c9cae"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

  const projectStorage = firebase.storage();
 const projectFirestore = firebase.firestore();  
 const timestamp = firebase.firestore.FieldValue.serverTimestamp;
 export { projectStorage, projectFirestore ,timestamp};





