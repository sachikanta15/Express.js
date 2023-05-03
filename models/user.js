const mongoose = require('mongoose')
const schema = mongoose.Schema({
    name:String,
    email:String,
    password:String,
  });
  
 const User = mongoose.model("users",schema)   //beacuse we only wnat ti export only user
module.exports =User;  
  
  