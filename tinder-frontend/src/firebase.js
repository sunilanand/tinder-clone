import firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyDjU5G9z1ZKb_HG3NSI924UyAB_KZRV7Qo",
  authDomain: "tinder-clone-mern-a3065.firebaseapp.com",
  databaseURL: "https://tinder-clone-mern-a3065.firebaseio.com",
  projectId: "tinder-clone-mern-a3065",
  storageBucket: "tinder-clone-mern-a3065.appspot.com",
  messagingSenderId: "272929874509",
  appId: "1:272929874509:web:c61e73999400f397eaf204",
  measurementId: "G-K2GLX53BZ2"
};

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const database = firebaseApp.firestore();

  export default database;