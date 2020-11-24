import firebase from "firebase"

var firebaseConfig = {
    apiKey: "AIzaSyDOcTgKmojP14zieHtD7yWJxrMgw6g25qw",
    authDomain: "react-crud-app-2e52f.firebaseapp.com",
    databaseURL: "https://react-crud-app-2e52f.firebaseio.com",
    projectId: "react-crud-app-2e52f",
    storageBucket: "react-crud-app-2e52f.appspot.com",
    messagingSenderId: "473561303185",
    appId: "1:473561303185:web:ee97f01ce39535dd92d730"
  };
// Initialize Firebase
var fireDb = firebase.initializeApp(firebaseConfig); 

export default fireDb.database().ref();