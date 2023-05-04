import firebase from "firebase";
require("@firebase/firestore");

const firebaseConfig = {
  apiKey: "AIzaSyB8GcaEkYKToVMOi2qgFJUvyInuyrDRMQk",
  authDomain: "bicicleta-93853.firebaseapp.com",
  projectId: "bicicleta-93853",
  storageBucket: "bicicleta-93853.appspot.com",
  messagingSenderId: "984480697578",
  appId: "1:984480697578:web:25d05e20e4aa13c7351b93"
};

firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
