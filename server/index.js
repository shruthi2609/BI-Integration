const express = require('express')
const server = express()
const bp = require("body-parser")
const cors=require('cors')
server.use(bp.json())
server.use(cors())
// deploy
const port=3001
const createTask = require('./routes/createTask')
const findTask = require('./routes/findTask')
const deleteTask = require('./routes/deleteTask')
const updateTask=require('./routes/updateCompletion')
server.use('/', createTask)
server.use('/', findTask)
server.use('/', deleteTask)
server.use('/',updateTask)
app.get('/favicon.ico', function(req, res) { 
    res.status(204);
    res.end();    
});
app.get('/', function(req, res) { 
    res.status(204);
    res.end();    
});
server.listen(process.env.port||port, () => console.log('server started'))