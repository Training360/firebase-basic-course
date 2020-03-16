const get = (db, collectionName) => {
    return new Promise( (resolve, reject) => {
      db.collection(collectionName).get()
      .then(snapshot => {
        const results = {};
        snapshot.forEach(doc => {
          results[doc.id] = doc.data();
        });
        return resolve(results);
      })
      .catch(err => {
        return reject(err);
      });
    });
  }
  
  module.exports = {
    get
  };
  