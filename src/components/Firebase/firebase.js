import * as firebase from 'firebase';
import 'firebase/firestore'

const config = {
  apiKey: "AIzaSyDqfcJgJi4wR6nUn-s986qHQsDj5QHX1Bo",
  authDomain: "personal-117.firebaseapp.com",
  databaseURL: "https://personal-117.firebaseio.com",
  projectId: "personal-117",
  storageBucket: "personal-117.appspot.com",
  messagingSenderId: "346449426694",
};

class Firebase {
  constructor() {
    firebase.initializeApp(config);

    this.db = firebase.firestore();
  }

  queryDatabase = (collection) => this.db.collection(collection).get().then(function(querySnapshot) {
    return querySnapshot;
  }).catch(function(error) {
    console.log("Error getting documents: ", error);
  });
}

export default Firebase;