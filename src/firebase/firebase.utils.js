import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyBDqtxBb5W7IM2MLu0hsCurVXsF_8MWwOU",
  authDomain: "zepfferson-clothin.firebaseapp.com",
  databaseURL: "https://zepfferson-clothin.firebaseio.com",
  projectId: "zepfferson-clothin",
  storageBucket: "zepfferson-clothin.appspot.com",
  messagingSenderId: "406369387793",
  appId: "1:406369387793:web:a422a38c5012643b6238b0",
  measurementId: "G-HKMCVW5XQM"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => auth.signInWithPopup(provider);
export default firebase;
