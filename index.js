const { MongoClient } = require('mongodb');
const { mongoose } = require('mongoose');

// Replace the uri string with your connection string.
const uri = 'mongodb://127.0.0.1:27017/?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+2.1.1';

const client = new MongoClient(uri);

const database = client.db('fruitsDB');

async function run() {
  try {
    const database = client.db('fruitsDB');
    const fruits = database.collection('fruits');

    // Query for a movie that has the title 'Back to the Future'
    const query = [
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
    ];
    const fruit = await fruit.findOne(query);

    console.log(fruit);
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir);
