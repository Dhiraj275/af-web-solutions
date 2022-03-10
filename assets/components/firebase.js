import firebase from 'firebase/app';
import 'firebase/database';
import 'firebase/storage';
var config = {
    apiKey: "AIzaSyCR-z6qPrsMS2yHNecgSja3mw5jxt37osI",
    authDomain: "af-web-solution.firebaseapp.com",
    databaseURL: "https://af-web-solution-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "af-web-solution",
    storageBucket: "af-web-solution.appspot.com",
    messagingSenderId: "777920782375",
    appId: "1:777920782375:web:f750c38a61c21bd6cf2e02",
    measurementId: "G-QREYR505EY"
};

if (!firebase.apps.length) {
    firebase.initializeApp(config);
 }else {
    firebase.app(); // if already initialized, use that one
 }
export default firebase