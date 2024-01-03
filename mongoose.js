const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017');

const fruitSchema = new mongoose.Schema({
  name: String,
  rating: Number,
  review: String,
});

const Fruit = mongoose.model('Fruit', fruitSchema);

const fruit = new Fruit({
  name: 'Apple',
  score: 7,
  review: 'Pretty Solid as a Fruit',
});

fruit.save();

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
