const mongoose = require('mongoose');
// Schema to contain activity name and correspondind array of 7 days and respective status
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