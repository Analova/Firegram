import * as firebase from "firebase/app";
import "firebase/storage";
import "firebase/firestore";

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyAz0eKMThl1SdNstu19KycuYRTvPtAq8bw",
  authDomain: "firegram-3fc00.firebaseapp.com",
  databaseURL: "https://firegram-3fc00.firebaseio.com",
  projectId: "firegram-3fc00",
  storageBucket: "firegram-3fc00.appspot.com",
  messagingSenderId: "645811729743",
  appId: "1:645811729743:web:3e62a448348fd3f847c13a",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectFirestore, timestamp };
