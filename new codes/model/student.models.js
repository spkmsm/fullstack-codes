const mongoose = require('mongoose');


const studentSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    contact:{
        type:Number,
        required:true
    },
    attendance:{
        type:Boolean,
        required:true   
    }
},{
    collection:"student",
    timestamps:true
});


module.exports = mongoose.model("student",studentSchema);