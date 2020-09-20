import firebase from "firebase";
const firebaseConfig = {
    apiKey: "AIzaSyBw1OQyUjxuBzl4G-IvbiOAhObVyczBm30",
    authDomain: "tinder-clone-59fc8.firebaseapp.com",
    databaseURL: "https://tinder-clone-59fc8.firebaseio.com",
    projectId: "tinder-clone-59fc8",
    storageBucket: "tinder-clone-59fc8.appspot.com",
    messagingSenderId: "286602127965",
    appId: "1:286602127965:web:c863645118400f99083bb4",
    measurementId: "G-WVRKQBBW6Q"

  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const database = firebaseApp.firestore();

  export default database;