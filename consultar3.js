const MongoCli = require('mongodb').MongoClient
//import { MongoClient } from "mongodb";

// Replace the uri string with your MongoDB deployment's connection string.
const uri = "mongodb+srv://SebastianPertuzG:sebas123@clusteradsi2364481.uulort2.mongodb.net/?retryWrites=true&w=majority";

const client = new MongoCli(uri);

async function run() {
  try {
    const database = client.db("FakeStore");
    const haiku = database.collection("APRENDICES");
    // create a document to insert
    const doc = {
      title: "Persona 1",
      content: "Esta es la primera persona",
    }
    const result = await haiku.insertOne(doc);

    console.log(`Un documento fue instertado con la _id: ${result.insertedId}`);
  } finally {
    await client.close();
  }
}
run().catch(console.dir);
