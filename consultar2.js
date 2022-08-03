//import { MongoClient } from "mongodb";
const MongoCli = require('mongodb').MongoClient

// Replace the uri string with your MongoDB deployment's connection string.
const uri = "mongodb+srv://SebastianPertuzG:sebas123@clusteradsi2364481.uulort2.mongodb.net/?retryWrites=true&w=majority";

const client = new MongoCli(uri);

async function run() {
  try {
    const database = client.db("FakeStore");
    const apr = database.collection("APRENDICES");

    // Query for a movie that has the title 'The Room'
    const query = {};

    const options = {
      // sort matched documents in descending order by rating
      //sort: { "imdb.rating": -1 },
      // Include only the `title` and `imdb` fields in the returned document
      projection: { _id: 0, title: 1, content: 1 },
    };

    const cursor = apr.find(query, options);

    if ((await cursor.countDocuments) === 0) {
      console.log("No documents found!");
    }

    //const aprendiz = await apr.findOne(query);

    // since this method returns the matched document, not a cursor, print it directly
    //console.log(cursor);
    await cursor.forEach(console.dir);
  } finally {
    await client.close();
  }
}
run().catch(console.dir);
//El .dir es para mostrar en la consola las propiedades de un objeto.
//El .log muestra un objeto en su forma de String.