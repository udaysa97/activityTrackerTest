const tracker = require('../models/tracker');
module.exports.update = (req,res)=>{
    let id = req.query.id;
    let updateText = req.query.updateTo;
    let index = req.query.index;
    tracker.findByIdAndUpdate(id,{$set:{"activityProperties.0.1":updateText}},(err,user)=>{
        return res.redirect('back');
    });
};