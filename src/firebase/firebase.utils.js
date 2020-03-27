import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyCyPB4KIhXwiJsvEsuO1PMhuHfAmBd-ZAM",
  authDomain: "bamtag-df975.firebaseapp.com",
  databaseURL: "https://bamtag-df975.firebaseio.com",
  projectId: "bamtag-df975",
  storageBucket: "bamtag-df975.appspot.com",
  messagingSenderId: "261019384788",
  appId: "1:261019384788:web:3d84f095a149c443fb7441",
  measurementId: "G-4GV47YX3V9"
};

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
      console.log("error creating user", error.message);
    }
  }

  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
