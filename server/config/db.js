const mongoose = require('mongoose');

const connectDB = async () => {
  const conn = await mongoose.connect('mongodb+srv://carinwood:carinwood@cluster0.1i4tgeu.mongodb.net/mgmt_db?retryWrites=true&w=majority');

  console.log(`MongoDB Connected:${conn.connection.host}`.cyan.underline.bold);
};

module.exports = connectDB;