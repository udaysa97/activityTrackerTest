const tracker = require('../models/tracker');
module.exports.update = (req,res)=>{
    let id = req.query.id;
    let updateText = req.query.updateTo;
    let index = req.query.index;
    // updateText is set in home.ejs. Refer to understand the working of this code
    tracker.findByIdAndUpdate(id,{$set:{"activityProperties.6.1":updateText}},(err,user)=>{
        return res.redirect('back');
    });
};