const tracker = require('../models/tracker');
const moment = require('moment');
module.exports.viewHobbies  = function(req,res){
    tracker.find({},(err,hobbies)=>{
        if(err){
            console.error.bind(console,"Unable to get data from DB");
            return;
        }
        return  res.render('allHobbies',{
            title: 'All Hobbies',
            hobbies:hobbies,
            moment:moment
        });
    });
};