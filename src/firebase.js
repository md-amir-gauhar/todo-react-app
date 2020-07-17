import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyBXuGpr6MYhdvQTWc6qlAY5UytH3EUtnGU",
  authDomain: "todo-app-93ce5.firebaseapp.com",
  databaseURL: "https://todo-app-93ce5.firebaseio.com",
  projectId: "todo-app-93ce5",
  storageBucket: "todo-app-93ce5.appspot.com",
  messagingSenderId: "757559906585",
  appId: "1:757559906585:web:4d1ab01a1521ca9d6eb588",
  measurementId: "G-J5YH6XJ91G"
});

const db = firebaseApp.firestore();

export default db;