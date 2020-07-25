const tracker = require('../models/tracker');
module.exports.removeHobbie  = function(req,res){
    let id = req.query.id;
    tracker.findOneAndDelete(id,(err)=>{
        if(err){
            return console.log("Error in finding hobby");
        }
        return res.redirect('back');
    });
};