const mongoose = require('mongoose');

const trackerSchema = new mongoose.Schema({
    activityName:{
        type:String,
        required:true
    },
    activityProperties:{
        type:Array,
        required:true,
        items:[
            {
                type:String,
                required:true
            },
            {
                type:String,
                required:true
            }
        ]
    }
});

const trackSchema = mongoose.model('trackerSchema',trackerSchema);

module.exports = trackSchema;