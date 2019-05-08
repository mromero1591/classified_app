require('dotenv').config();

const express = require('express');
const bodyParser = require('body-parser');
const massive = require('massive');

const app = express();
app.use(bodyParser.json());

//env variables
const {DATABASE_URI, PORT} = process.env;


//listening port
app.listen(PORT, () => {
    console.log('listening at: ', PORT);
});
