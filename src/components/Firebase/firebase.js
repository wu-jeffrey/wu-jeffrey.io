import firebase from 'firebase/app';
import 'firebase/firestore';

const config = {
  apiKey: "AIzaSyDqfcJgJi4wR6nUn-s986qHQsDj5QHX1Bo",
  authDomain: "personal-117.firebaseapp.com",
  databaseURL: "https://personal-117.firebaseio.com",
  projectId: "personal-117",
  storageBucket: "personal-117.appspot.com",
  messagingSenderId: "346449426694",
};

export class Firebase {
  constructor() {
    if (!firebase.apps.length) {
      firebase.initializeApp(config)
    } else {
      firebase.app(); // if already initialized, use that one
    }

    this.db = firebase.firestore();
  }

  queryDatabase = (collection) => this.db.collection(collection).get().then(function (querySnapshot) {
    return querySnapshot;
  }).catch(function (error) {
    console.log("Error getting documents: ", error);
  });
}
