import firebase from 'firebase';
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyD8GbgIpLyh67qsZPfxIJmMdHiV0fDbOIk",
    authDomain: "clone-c0bfe.firebaseapp.com",
    projectId: "clone-c0bfe",
    storageBucket: "clone-c0bfe.appspot.com",
    messagingSenderId: "77454763739",
    appId: "1:77454763739:web:0de791c0c2be0e0c5b8efe",
    measurementId: "G-0WZJLTC99H"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export {db ,auth, provider};
