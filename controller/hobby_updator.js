const tracker = require('../models/tracker');
module.exports.update = (req,res)=>{
    let id = req.query.id;
    let updateText = req.query.updateTo;
    let index = parseInt(req.query.index);
    console.log('Index is===='+index);
    //let stringToUpdate = "activityProperties."+index+".1";
    // updateText is set in home.ejs. Refer to understand the working of this code

    // To update specififc index in DB
    if(index == '0'){
        tracker.findByIdAndUpdate(id,{$set:{"activityProperties.0.1":updateText}},(err,user)=>{
            return res.redirect('back');
        });
    }
    else if(index == 1){
        tracker.findByIdAndUpdate(id,{$set:{"activityProperties.1.1":updateText}},(err,user)=>{
            return res.redirect('back');
        });
    }
    else if(index == 2){
        tracker.findByIdAndUpdate(id,{$set:{"activityProperties.2.1":updateText}},(err,user)=>{
            return res.redirect('back');
        });
    }
    else if(index == 3){
        tracker.findByIdAndUpdate(id,{$set:{"activityProperties.3.1":updateText}},(err,user)=>{
            return res.redirect('back');
        });
    }
    else if(index == 4){
        tracker.findByIdAndUpdate(id,{$set:{"activityProperties.4.1":updateText}},(err,user)=>{
            return res.redirect('back');
        });
    }
    else if(index == 5){
        tracker.findByIdAndUpdate(id,{$set:{"activityProperties.5.1":updateText}},(err,user)=>{
            return res.redirect('back');
        });
    }
    else{
        tracker.findByIdAndUpdate(id,{$set:{"activityProperties.6.1":updateText}},(err,user)=>{
            return res.redirect('back');
        });
    }

};