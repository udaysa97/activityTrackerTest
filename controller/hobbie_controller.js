const tracker = require('../models/tracker');
const moment = require('moment');
module.exports.storeHobbie  = function(req,res){
    //console.log(req.body);
    //console.log("inside thisss");
    const arr = [];
    // New hobbie creation. Today and previous 6 Days are set in this for every new hobby
    for(let i = 6 ; i >=0 ; i--){
        const newobj = [];
        let a = "";
        let date = moment();
        // setting in reverse order to faciliate the updation and removal every other day
        date = date.subtract(i,"days").format("DD-MM-YYYY");
        a+= date.toString();
        newobj.push(a);
        newobj.push("None");
        arr.push(newobj);
    }
    //push hobby with dates to DB
    tracker.create({
        activityName:req.body.activity_name,
        activityProperties:arr
    },(err,newHobbie)=>{
        if(err){
            console.log("error while pushing hobbie to DB:"+err);
            return;
        }
        return res.redirect('back');
    });

};