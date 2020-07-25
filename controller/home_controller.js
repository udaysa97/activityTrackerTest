const tracker = require('../models/tracker');
module.exports.home = (req,res)=>{
    tracker.find({},(err,hobbies)=>{
        if(err){
            console.error.bind(console,"Unable to get data from DB");
            return;
        }
        return  res.render('home',{
            title: 'My tacker page',
            hobbies:hobbies
        });
            
        
    });
};