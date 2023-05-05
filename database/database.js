const mongoose = require('mongoose');
require('dotenv').config();

const uri = process.env.DATABASE_URL;
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;

db.once('open', () => {
  console.log('Database connection successful');
});

db.on('error', (err) => {
  console.error('Database connection error:', err);
});

module.exports = db;
