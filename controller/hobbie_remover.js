const tracker = require('../models/tracker');
module.exports.removeHobbie  = function(req,res){
    let id = req.query.id;
    // get the id on which buttonwas clicked and delete it
    tracker.findByIdAndDelete(id,(err)=>{
        if(err){
            return console.log("Error in finding hobby");
        }
        return res.redirect('back');
    });
};