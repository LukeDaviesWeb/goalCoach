import * as firebase from 'firebase';

const config ={
    apiKey: "AIzaSyB8SzqN8FnvjpjWT8iDD3QSU6Sr4lDVSZc",
    authDomain: "goalcoach-bf10d.firebaseapp.com",
    databaseURL: "https://goalcoach-bf10d.firebaseio.com",
    projectId: "goalcoach-bf10d",
    storageBucket: "goalcoach-bf10d.appspot.com",
    messagingSenderId: "12677533113"
  };

  export const firebaseApp = firebase.initializeApp(config);
  export const goalRef = firebase.database().ref('goals');
  export const completeGoalRef = firebase.database().ref('completeGoals');