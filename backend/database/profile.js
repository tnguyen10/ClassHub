const {getDatabase} = require('./mongo');

const collectionName = 'profile';

async function getProfile() {
  const database = await getDatabase();
  profiles = await database.collection(collectionName).find({}).toArray()
  return profiles[0];
}

module.exports = {
    getProfile,
};