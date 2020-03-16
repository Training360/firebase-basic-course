const functions = require('firebase-functions');
const admin = require('firebase-admin');
const DB = require('./db');

admin.initializeApp();

const database = admin.firestore();

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions

exports.api = functions.https.onRequest( async (request, response) => {
    if (!request.query.col) {
        return response.status(400).json(
            {error: 'The col query parameter is required.'}
        );
    }

    const collectionName = request.query.col;
    const result = await DB.get(database, collectionName);
    return response.json(result);
});

