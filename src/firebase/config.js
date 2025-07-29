import firebase from "./firebase/app"
import "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyDrGiHSJRa-RX4FzR3QLuR7eD4DJAsaQLg",
  authDomain: "movies-project-2-bbc16.firebaseapp.com",
  projectId: "movies-project-2-bbc16",
  storageBucket: "movies-project-2-bbc16.firebasestorage.app",
  messagingSenderId: "83834647438",
  appId: "1:83834647438:web:55e775d2ff7c4540076adf"
};

firebase.initializeApp(firebaseConfig)

const projectFirestore = firebase.firestore()

export { projectFirestore }