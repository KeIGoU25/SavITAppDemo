const { MongoClient } = require("mongodb");
require('dotenv').config();

const dbUsername = process.env.DB_USERNAME;
const dbPassword = process.env.DB_PASSWORD;
const uri = `mongodb+srv://${dbUsername}:${dbPassword}@cluster0.ylv86p0.mongodb.net/?retryWrites=true&w=majority`;

console.log(uri);

let client;

async function connectToDatabase() {
  if (!client) {
    client = new MongoClient(uri);
    await client.connect();
  }
}

async function insertToDB(dbName, dbCollection, content) {
  try {
    await connectToDatabase(); // Ensure the client is connected before performing operations

    const database = client.db(dbName);
    const user = database.collection(dbCollection);

    const result = await user.insertOne(content);
    console.log(`A document was inserted with the _id: ${result.insertedId}`);
  } catch (error) {
    console.error('Error inserting document:', error);
  }
}

async function findToDB(dbName, dbCollection, email) {
    try {
      await connectToDatabase(); // Ensure the client is connected before performing operations
  
      const database = client.db(dbName);
      const user = database.collection(dbCollection);

      const query = { email : `${email}`};
  
      const result = await user.findOne(query);
      console.log(result);

      return result;
    } catch (error) {
      console.error('Error finding document:', error);
    }
  }

  async function loginDB(dbName, dbCollection, email, password) {
    try {
      await connectToDatabase(); // Ensure the client is connected before performing operations
  
      const database = client.db(dbName);
      const user = database.collection(dbCollection);

      const query = { email : `${email}`};
  
      const result = await user.findOne(query);

      if (result === null) {
        return "no email";
      } else if (result.password === password) {
        console.log(result);
        return result;
      } else {
        return "wrong password";
      }
    } catch (error) {
      console.error('Error finding document:', error);
    }
  }

  async function locationDB(dbName, dbCollection, email, location) {
    try {
      await connectToDatabase(); // Ensure the client is connected before performing operations
  
      const database = client.db(dbName);
      const user = database.collection(dbCollection);

      // Create a filter for movies with the title "Random Harvest"
      const filter = { email: `${email}` };
      /* Set the upsert option to insert a document if no documents match
      the filter */
      const options = { upsert: true };
      // Specify the update to set a value for the plot field
      const updateDoc = {
        $set: {
          location: `${location}`
        },
      };

      // Update the first document that matches the filter
      const result = await user.updateOne(filter, updateDoc, options);
      
      // Print the number of matching and modified documents
      console.log(
        `${result.matchedCount} document(s) matched the filter, updated ${result.modifiedCount} document(s)`,
      );
      } catch (error) {
        console.error('Error finding document:', error);
    }
  }

  async function subscriptionDB(dbName, dbCollection, email, plan) {
    try {
      await connectToDatabase(); // Ensure the client is connected before performing operations
  
      const database = client.db(dbName);
      const user = database.collection(dbCollection);

      // Create a filter for movies with the title "Random Harvest"
      const filter = { email: `${email}` };
      /* Set the upsert option to insert a document if no documents match
      the filter */
      const options = { upsert: true };
      // Specify the update to set a value for the plot field
      const updateDoc = {
        $set: {
          plan: `${plan}`
        },
      };

      // Update the first document that matches the filter
      const result = await user.updateOne(filter, updateDoc, options);
      
      // Print the number of matching and modified documents
      console.log(
        `${result.matchedCount} document(s) matched the filter, updated ${result.modifiedCount} document(s)`,
      );
      } catch (error) {
        console.error('Error finding document:', error);
    }
  }

  //locationDB("dbUserAccount", "Users", "Cabuyao, Laguna");
  //subscriptionDB("dbUserAccount", "Users", "kswag.22l@gmail.com", "Free");
  //loginDB("dbUserAccount", "Users", "kswag.22l@gmail.com", "1234");

  module.exports = {
    insertToDB,
    findToDB,
    loginDB,
    locationDB,
    subscriptionDB,
    connectToDatabase,
  };