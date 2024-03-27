const { MongoClient } = require('mongodb');

require('dotenv').config();

const uri = process.env.MONGO_URL;

const client = new MongoClient(uri);

const dbName = process.env.DB_NAME || 'defaultmongodb';
const db = client.db(dbName);

module.exports = {
  db,
  client,
};