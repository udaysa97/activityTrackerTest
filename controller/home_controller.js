const tracker = require('../models/tracker');
const moment = require('moment');
module.exports.home = (req,res)=>{
    // get all hobbies in page load
    tracker.find({},(err,hobbies)=>{
        if(err){
            console.error.bind(console,"Unable to get data from DB");
            return;
        }
        // To Avoid error in case no hobbies present in DB
        if(hobbies.length > 0){
            // Code to maintain only latest 7 days data 
            var date = moment(hobbies[0].activityProperties[6][0],'DD-MM-YYYY');
            console.log(date.toString());
            var today = moment();
            today = today.add(2,'days');
            var diff = today.diff(date,'days');
            let count = diff - 1;
            console.log('difference is'+diff);
            // If app is opened after more than 7 days only update the last week data to DB and remove rest;
            if(count > 6){
                count = 6;
            }
            for(let hob of hobbies){
                // For all extra dates greater than 7 remove the mpst old date and add new date
                while(count >= 0){

                    tracker.updateOne({'_id':hob._id},{$pop:{'activityProperties':-1}},(err,val)=>{
                        if(err){
                            console.log("error in removing elem from DB"+err);
                        }
                    });
                    const pushonj = [];
                    const newobj = [];
                    let newdate = moment().add(2,'days');
                     newdate = newdate.subtract(count,"days").format("DD-MM-YYYY");
                     console.log('date pushed'+newdate.toString());
                    newobj.push(newdate.toString());
                    newobj.push("None");
                    pushonj.push(newobj);
                    tracker.updateOne({'_id':hob._id},{$push:{'activityProperties':pushonj}},(err,res)=>{
                        if(err){
                            console.log('Error while updating elements' );
                        }
                    });
                    count--;
                }
            } 
        }                           
        
    });
    // After all updattion on previous hobbies get all hobbies again and render using home.ejs
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