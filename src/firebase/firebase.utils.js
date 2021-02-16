import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyAFQbGK5RJyRFdR7O0zXfvE_z_KdELZ0Yk",
    authDomain: "ecommerce-project-e69d2.firebaseapp.com",
    projectId: "ecommerce-project-e69d2",
    storageBucket: "ecommerce-project-e69d2.appspot.com",
    messagingSenderId: "497788486529",
    appId: "1:497788486529:web:eab8d65e8fb0b3a1f15e80"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;