import firebase from 'firebase/app'
import 'firebase/app'
import 'firebase/database'

var config = {
    apiKey: "AIzaSyB-w_rME7x1vJGq_auIMPp0bmoCCglSRd0",
    authDomain: "footballteamdb.firebaseapp.com",
    databaseURL: "https://footballteamdb.firebaseio.com",
    projectId: "footballteamdb",
    storageBucket: "footballteamdb.appspot.com",
    messagingSenderId: "828536094367"
  };

  firebase.initializeApp(config);

  const firebaseDB = firebase.database()
  const MatchesData = firebaseDB.ref('matches')

 export {
     firebase,
     MatchesData
 }