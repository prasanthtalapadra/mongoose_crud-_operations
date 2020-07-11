const mongoose = require('mongoose');


const tourSchema = new mongoose.Schema({
    hackernews:{type:String,min:20,max:200,required:true,},
    name:{type:String,min:5,max:50,required:true},
    points:{type: Number,required:true},
    comments:{type:Number,required:true},
    time:{type:Date,default:Date.now(),required:true},
    link:{type:String,required:true}


});
const Tour=mongoose.model('Tour',tourSchema);

module.exports =Tour;