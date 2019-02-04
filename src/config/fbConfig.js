import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// Initialize Firebase dus connectie tussen website en firebase
var config = {
    apiKey: "AIzaSyA4rK1WYWoiF6tjghrjO7dmCTquDseZEaE",
    authDomain: "aboalert1.firebaseapp.com",
    databaseURL: "https://aboalert1.firebaseio.com",
    projectId: "aboalert1",
    storageBucket: "aboalert1.appspot.com",
    messagingSenderId: "61237995703"
  };
  firebase.initializeApp(config);
  firebase.firestore().settings({ timestampsInSnapshots: true });

  export default firebase