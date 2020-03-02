if (typeof firebase === 'undefined') throw new Error('hosting/init-error: Firebase SDK not detected. You must include it before /__/firebase/init.js');
firebase.initializeApp({
  "apiKey": "AIzaSyAfnfcAn8b2Q35JhutHqfLc8qQOtblfqK0",
  "appId": "1:85640962882:web:9ad461b94fd1b2e0c8dedb",
  "authDomain": "flicker-game.firebaseapp.com",
  "databaseURL": "https://flicker-game.firebaseio.com",
  "measurementId": "G-P8JRLYT324",
  "messagingSenderId": "85640962882",
  "projectId": "flicker-game",
  "storageBucket": "flicker-game.appspot.com"
});