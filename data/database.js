const mongoose = require('mongoose')

const connectDb = ()=>{
    
mongoose.connect(process.env.MONGO_URI,{
    dbName:"backendApi",
}).then(()=>{
    console.log("connected with DataBase");
}).catch((e)=>{
    console.log(e);
})
}
module.exports =connectDb;