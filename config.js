import firebase from "firebase";
require("@firebase/firestore");

const firebaseConfig = {
    apiKey: "AIzaSyCYZl5MmzZf1j62axm-Ste7ougnAhRFvfg",
    authDomain: "class-project-c3592.firebaseapp.com",
    databaseURL: "https://class-project-c3592.firebaseio.com",
    projectId: "class-project-c3592",
    storageBucket: "class-project-c3592.appspot.com",
    messagingSenderId: "70981565948",
    appId: "1:70981565948:web:ee4f3142d41e776d12c679",
    measurementId: "G-S96MZLZHVM"
  };




firebase.initializeApp(firebaseConfig);

export default firebase.firestore();


