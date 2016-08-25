const mongoose = require('mongoose');
// const autoIncrement = require('mongoose-auto-increment');

const mongoURI = 'mongodb://localhost/Maderight';
mongoose.createConnection(mongoURI);
// const connection = mongoose.createConnection(mongoURI); // try .connect() if this doesn't work

// autoIncrement.initialize(connection);

// Run in separate terminal window using `sudo mongod`
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('>>> Mongodb connection open');
});

module.exports = db;