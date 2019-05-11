require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const massive = require('massive');
const itemsController = require('./controllers/itemsController');

const app = express();
app.use(bodyParser.json());

//env variables
const {DATABASE_URI, SERVER_PORT} = process.env;
massive(DATABASE_URI)
.then(db => {
    app.set('db', db);
}).catch(err => {
    console.log('error when setting massive:', err);
});


//End Points
app.get('/api/items', itemsController.getItems);

//listening port
app.listen(SERVER_PORT, () => {
    console.log('listening at: ', SERVER_PORT);
});
