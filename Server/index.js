require('dotenv').config()
const express = require('express')
const app = express();
const massive = require('massive')
const IC = require('./controller/inventoryController.js')

const {SERVER_PORT} = process.env;
const{DB_STRING} = process.env;


console.log("Server file INDEX.JS Loading, connections attempting")

massive(DB_STRING).then(db =>{
    app.set('db', db);
    {console.log("Database Connected")}})

app.use(express.json())

app.get('/api/inventory/:inventory_id?', IC.getInventory)
app.post('/api/inventory', IC.addInventory)



app.listen(SERVER_PORT, function () {console.log(`Server listening port ${SERVER_PORT}`)})