const mongoose = require('mongoose')
const schema = mongoose.Schema({
    title:{
        type:String,
        required:true,
    },
    description:{
      type:String,
      uniquw:true,
    },
    isCompleted:{
      type:Boolean,
     default:false, 
    },
    user:{
      type:mongoose.Schema.ObjectId,
      ref: users,  //collection name
      required:true,
    },
    createdAt:{
        type:Boolean,
        default:Date.now,
    }
  });
  
 const Task = mongoose.model("Task",schema)   //beacuse we only wnat ti export only user
module.exports =Task;  
  
  