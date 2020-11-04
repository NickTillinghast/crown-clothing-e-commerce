import firebase from 'firebase/app';

import 'firebase/firestore';
import 'firebase/auth';

const config = {

    apiKey: "AIzaSyCokzPyL4_yn1AiVHbfEbQvwU3FTlbROg4",
    authDomain: "crown-clothing-db-89c4a.firebaseapp.com",
    databaseURL: "https://crown-clothing-db-89c4a.firebaseio.com",
    projectId: "crown-clothing-db-89c4a",
    storageBucket: "crown-clothing-db-89c4a.appspot.com",
    messagingSenderId: "858355562916",
    appId: "1:858355562916:web:87686abb0f742af8d82931",
    measurementId: "G-XFR4XLX66S"

}
firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
