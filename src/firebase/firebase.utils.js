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

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }

  return userRef;
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
