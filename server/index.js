const express = require('express')
const server = express()
const bp = require("body-parser")
const cors=require('cors')
const favicon = require("serve-favicon");
app.use(favicon(path.join('../client', "build", "favicon.ico")));
app.use(express.static(path.join('../client', "build")));
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
server.get("/*", function (req, res) {
    res.sendFile(path.join('../client', "build", "index.html"));
    });

server.listen(process.env.port||port, () => console.log('server started'))