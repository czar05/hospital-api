const mongoose = require('mongoose');

//mongoose.connect('mongodb://localhost/todo_list_db');
mongoose.connect('mongodb://localhost:27017/Hospital_data', {useNewUrlParser: true, useUnifiedTopology: true});

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'error connecting to db'));

db.once('open', function(){
    console.log('successfully connected to database');
});

module.exports = db;