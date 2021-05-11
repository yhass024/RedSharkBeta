import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBx-nMwbsZOOxUMDO3g7LCoI-4JTqsTAhY",
  authDomain: "database-2ecc1.firebaseapp.com",
  databaseURL: "https://database-2ecc1-default-rtdb.firebaseio.com",
  projectId: "database-2ecc1",
  storageBucket: "database-2ecc1.appspot.com",
  messagingSenderId: "218740805206",
  appId: "1:218740805206:web:2ef3b466b12f8db2c835f7",
  measurementId: "G-XJLN9WZRS4",
};
// Initialize Firebase
// if (!firebase.apps.length) {
//   firebase.initializeApp({});
// } else {
//   firebase.app(); // if already initialized, use that one
// }

firebase.initializeApp(firebaseConfig);

export default firebase;
