const {MongoMemoryServer} = require('mongodb-memory-server');
const {MongoClient} = require('mongodb');

let database = null;
let uri = "mongodb://localhost:27017"

async function startDatabase() {
//   const mongoMS = new MongoMemoryServer();
//   await mongoMS.start();
//   const uri = mongoMS.getUri();
  const connection = await MongoClient.connect(uri, {useNewUrlParser: true});
  database = connection.db("classHub");
  console.log("Database connected at", uri);
}

async function getDatabase() {
  if (!database) await startDatabase();
  return database;
}

module.exports = {
  getDatabase,
  startDatabase,
};