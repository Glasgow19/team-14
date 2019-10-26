import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/storage';

var firebaseConfig = {
    apiKey: process.env.apiKey,
    authDomain: "dress-code-7470f.firebaseapp.com",
    databaseURL: "https://dress-code-7470f.firebaseio.com",
    projectId: "dress-code-7470f",
    storageBucket: "dress-code-7470f.appspot.com",
    messagingSenderId: "349414207673",
    appId: "1:349414207673:web:8e4559896593a46811ab68",
    measurementId: "G-GPRS22HR1Y"
};

firebase.initializeApp(firebaseConfig);

const firestore = firebase.firestore();
const storage = firebase.storage();

export {
  firestore,
  storage
};


