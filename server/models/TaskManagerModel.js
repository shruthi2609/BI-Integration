const mongoose = require('mongoose')
mongoose.connect(process.env.MONGODB_URI||'mongodb://localhost:27017/TaskManager')
    .then((res) => console.log('Connected to database'))
    .catch((err) => console.log('Error in connection'))

const taskManager = mongoose.Schema
const taskManagerModelSchema = new taskManager({
    taskid: Number,
    taskname: String,
    completionstatus: Boolean
})
const taskManagerModel = mongoose.model('taskmanager', taskManagerModelSchema)
module.exports = taskManagerModel