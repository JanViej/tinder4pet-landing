import firebase from 'firebase/app';
import 'firebase/storage';  // <----
import 'firebase/auth';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
  measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID,
};

try {
  if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
  }  
} catch (error) {
  console.log(error);
};

export const loginWithGoogleFirebaseApi = () => new Promise((resolve, reject) => {
  const provider = new firebase.auth.GoogleAuthProvider();
  provider.addScope('https://www.googleapis.com/auth/firebase.messaging');
  provider.setCustomParameters({
    prompt: 'select_account',
  });
  firebase
    .auth()
    .signInWithPopup(provider)
    .then(response => resolve(response))
    .catch(error => reject(error));
})

export const loginWithFacebookFirebaseApi = () => new Promise((resolve, reject) => {
  const provider = new firebase.auth.FacebookAuthProvider();
  provider.setCustomParameters({
    prompt: 'select_account',
  });
  firebase
    .auth()
    .signInWithPopup(provider)
    .then(response => resolve(response))
    .catch(error => reject(error));
})

export const logoutFirebase = () => new Promise((resolve, reject) => {
  firebase.auth().signOut().then(() => resolve()).catch(error => reject(error))
})

export default firebase;
