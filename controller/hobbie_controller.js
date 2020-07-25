const tracker = require('../models/tracker');
module.exports.storeHobbie  = function(req,res){
    console.log(req.body);
    console.log("inside thisss");
    const arr = [];
    for(let i = 0 ; i < 7 ; i++){
        const newobj = [];
        let a = "";
        let date = new Date();
        date.setDate(date.getDate() - i);
        a+= date.getDate() +'/'+ date.getMonth()+'/' + date.getFullYear();
        newobj.push(a);
        newobj.push("None");
        arr.push(newobj);
    }
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