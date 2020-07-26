//code to set up conection to mongoose. 

const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/activity-tracker-db');

const db = mongoose.connection;

db.on('error',console.error.bind(console,"Error in DB connection"));
db.once('open',()=>{
    console.log("Connection to DB success");
});