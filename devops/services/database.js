const { MongoClient } = require("mongodb");

// MongoDB connection details from environment variables
const username = process.env.DB_USER;
const password = process.env.DB_PASSWORD;
const host = process.env.DB_HOST;
const port = process.env.DB_PORT;
const database = process.env.DB_NAME;

// Constructing the MongoDB connection URI
const uri = `mongodb://${username}:${password}@${host}:${port}/${database}?authSource=admin`;

const client = new MongoClient(uri);

let db;

async function connectToMongo() {
    try {
        await client.connect();
        console.log("Connected to MongoDB");
        db = client.db(database);
    } catch (error) {
        console.error("Error connecting to MongoDB:", error);
    }
}

connectToMongo();

module.exports = {
    db: db,
    client: client
};
