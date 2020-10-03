import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyB_lRwIjICYufH05RvVsWk_QMTa6KN1b34",
  authDomain: "clone-4348a.firebaseapp.com",
  databaseURL: "https://clone-4348a.firebaseio.com",
  projectId: "clone-4348a",
  storageBucket: "clone-4348a.appspot.com",
  messagingSenderId: "1062573286142",
  appId: "1:1062573286142:web:a93daf1fd4f6778b6f3baf",
  measurementId: "G-7XMN4WDC0K",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebaseApp.auth();

export { db, auth };
