import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyBLAW_0hAY7tQq7NYBXCkrmXgoXuQgTt7Q",
    authDomain: "letsconnect-6db96.firebaseapp.com",
    projectId: "letsconnect-6db96",
    storageBucket: "letsconnect-6db96.appspot.com",
    messagingSenderId: "175913427174",
    appId: "1:175913427174:web:a904cdf19c64dfa2f41b27",
    measurementId: "G-PSKRN20KSX"
})

const db = firebaseApp.firestore()

const auth = firebase.auth()

export {db,auth}