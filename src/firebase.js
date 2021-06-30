import firebase from 'firebase';
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDdWSEOLrE8fnoDIbixDrTKfncgKEspuCQ",
  authDomain: "netflix-clone-e6131.firebaseapp.com",
  projectId: "netflix-clone-e6131",
  storageBucket: "netflix-clone-e6131.appspot.com",
  messagingSenderId: "217525138247",
  appId: "1:217525138247:web:8ddf32249f06f3afd61262",
  measurementId: "G-QV5PDRJ3T7"
};

  const firebaseapp=firebase.initializeApp(firebaseConfig);
  const db=firebaseapp.firestore();
  const auth=firebase.auth();

  export {auth};
  export default db;
  