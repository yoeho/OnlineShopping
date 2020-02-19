const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;

let _db;
//Connection with mongodb
const mongoConnect = (callback) => {
    MongoClient.connect('mongodb+srv://min:min123@cluster1-sukjl.mongodb.net/product')
        .then(client => {
            console.log('Connected..');
            _db = client.db();
            callback();
        })
        .catch(err => {
            console.log(err);
            throw err;
        });
}

//Access Db
const getDb = () => {
    if (_db) {
        return _db;
    }
    throw ('No Database Found');
}

exports.mongoConnect = mongoConnect;
exports.getDb = getDb;