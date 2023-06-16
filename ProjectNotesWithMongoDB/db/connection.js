const {MongoClient} = require('mongodb');
const url = "mongodb://127.0.0.1:27017/noteDb"; // After the "270717/ i choose the database name."

let _db; 

const initDb = cb => {

  MongoClient.connect(url, { useUnifiedTopology: true })
    .then(client => {
      _db = client;
      cb(null, _db);
    })
    .catch(err => {
      cb(err);
    });

}

const getDb = () => {

  return _db;

}

module.exports = {
  initDb,
  getDb
}