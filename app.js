const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');

// Connection URL
// const url = 'mongodb://localhost:27017';
const url = 'mongodb://127.0.0.1:27017/?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+2.1.1';

// Database Name
const dbName = 'fruitsDB';

// Create a new MongoClient
const client = new MongoClient(url, { useNewUrlParser: true });

// Use connect method to connect to the Server
client.connect(function (err) {
  assert.equal(null, err);
  console.log('Connected Successfully to Server');

  const db = client.db(dbName);

  findDocuments(db, function () {
    client.close();
  });
});

const insertDocuments = function (db, callback) {
  // Get the documents collection
  const collection = db.collection('fruits');
  // Insert some documents
  collection.insertMany(
    [
      {
        name: 'Apple',
        score: 8,
        review: 'Great Fruit',
      },
      {
        name: 'Orange',
        score: 6,
        review: 'Kinda Sour',
      },
      {
        name: 'Banana',
        score: 9,
        review: 'Great Stuff!',
      },
    ],
    function (err, result) {
      assert.equal(err, null);
      assert.equal(3, result.result.n);
      assert.equal(3, result.ops.length);
      console.log('Inserted 3 Documents Into The Collection');
      callback(result);
    }
  );
};

const findDocuments = function (db, callback) {
  // Get the documents collection
  const collection = db.collection('fruits');
  // Find some documents
  collection.find({}).toArray(function (err, fruits) {
    assert.equal(err, null);
    console.log('Found the following records');
    console.log(fruits);
    callback(fruits);
  });
};
