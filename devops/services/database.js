const { MongoClient } = require("mongodb");
require('dotenv').config();

const uri = process.env.MONGO_URL;
const dbName = process.env.DB_NAME;

const client = new MongoClient(uri);

const db = client.db(dbName);

module.exports = {
    db: db,
    client: client
};