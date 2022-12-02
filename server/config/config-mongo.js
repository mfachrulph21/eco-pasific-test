require('dotenv').config(); 

const { MongoClient } = require('mongodb');
const uri = process.env.MONGO_URI;
const dbName = 'testDB';
const client = new MongoClient(uri);
let db;

async function connect() {
    try {
        await client.connect();
        console.log('connected to mongoDB!');
        const dbConnection = client.db(dbName);

        db = dbConnection;
        return dbConnection;
        
    } catch (error) {
        console.log(error)
    }
}

function getDB() {
    return db
}

module.exports = { connect, getDB };