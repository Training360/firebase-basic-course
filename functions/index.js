const functions = require('firebase-functions');
const admin = require('firebase-admin');

admin.initializeApp();

const db = admin.firestore();
const collection = db.collection("games");

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions

exports.api = functions.https.onRequest((request, response) => {
    collection.get()
        .then(snapshot => {
            const results = {};
            snapshot.forEach(doc => {
                results[doc.id] = doc.data();
            });
            return response.json(results);
        })
        .catch(err => {
            return response.status(400).json(err);
        });
});

