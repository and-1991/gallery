import firebase from "firebase/app";
import "firebase/storage";
import "firebase/firestore";

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyCScBWXlm35zgcUM7oahu_BmGkKHJdAOyg",
    authDomain: "gallery-app-4e607.firebaseapp.com",
    projectId: "gallery-app-4e607",
    storageBucket: "gallery-app-4e607.appspot.com",
    messagingSenderId: "1007955559860",
    appId: "1:1007955559860:web:a901b2b15c5cf3a0ca1ee1"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();

const projectFirestore = firebase.firestore();

const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectFirestore, timestamp };

