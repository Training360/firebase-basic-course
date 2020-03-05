// Handle firebase firestore database.
const DB = {
    db: firebase.firestore(),
    get: async (path) => {
        const querySnapshot = await DB.db.collection(path).get();
        const result = {};
        querySnapshot.forEach((doc) => {
            result[doc.id] = doc.data();
        });
        return result;
    },
    create: async (path, data) => {
        const docRef = await DB.db.collection(path).add(data);
        return docRef;
    },
};