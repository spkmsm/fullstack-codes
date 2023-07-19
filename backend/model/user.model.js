const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: String,
  password:String
},{
    timestamps:true,
    collection:"user"
});

module.exports = mongoose.model("user",userSchema);