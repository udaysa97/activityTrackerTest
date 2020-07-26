const express = require('express');
const db = require('./config/mongoose');
const moment = require('moment');
const app = express();
// set moment.js to be globally available (was used for use in ejs might remove as structure of work changed)
app.locals.moment = require('moment');
const port = 8000;
// to set view 
app.set('view engine','ejs');
app.set('views','./views');
// set all routes to routes folder
app.use('/', require('./routes'));


// listen to port and check if server running on desired port
app.listen(port,(err)=>{
    if(err){
        console.log(`Error in server:${err}`);
    }
    console.log(`Port created at : ${port}`);
})