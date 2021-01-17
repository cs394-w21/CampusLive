import * as firebase from "firebase";
import "firebase/auth";
import "firebase/database";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCQJkJPoXlXAc0MGo71zGEVu4C9Zo6Q8ts",
  authDomain: "campuslive-a91c0.firebaseapp.com",
  databaseURL: "https://campuslive-a91c0-default-rtdb.firebaseio.com",
  projectId: "campuslive-a91c0",
  storageBucket: "campuslive-a91c0.appspot.com",
  messagingSenderId: "1005323234189",
  appId: "1:1005323234189:web:1f29bff45558151a71ebc4",
  measurementId: "G-VH3G8F3J3K",
};

firebase.initializeApp(firebaseConfig);

export { firebase };
