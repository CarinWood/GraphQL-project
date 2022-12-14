const express = require('express');
const colors = require('colors');
const cors = require('cors');
require('dotenv').config();
const { graphqlHTTP } = require('express-graphql');
const schema = require('./schema/schema');
const connectDB = require('./config/db');
const port = process.env.PORT || 5000;

const app = express();

// Connect to database
connectDB();

app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: true
}))

app.listen(port, () => {
    console.log('server running on port: ' + port)
})