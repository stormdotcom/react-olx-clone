import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/storage'


// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {

  apiKey: "AIzaSyCAj8EwpYLVSPGdriu7qI0qJgokBGQ6Vb0",

  authDomain: "olx-clone-e8959.firebaseapp.com",

  projectId: "olx-clone-e8959",

  storageBucket: "olx-clone-e8959.appspot.com",

  messagingSenderId: "524032984625",

  appId: "1:524032984625:web:e24851376bb649fca23710",

  measurementId: "G-3F0MLX50KP"

};

  
  export default firebase.initializeApp(firebaseConfig)