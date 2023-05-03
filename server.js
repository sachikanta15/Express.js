const express = require("express");
const app = express();
const port = 5000;
const mongoose = require("mongoose");

app.use(express.json());  //using middleware to pass json data


mongoose.connect("mongodb://127.0.0.1:27017",{
    dbName:"backendApi",
}).then(()=>{
    console.log("connected with DataBase");
}).catch((e)=>{
    console.log(e);
})


const schema = mongoose.Schema({
  name:String,
  email:String,
  password:String,
});

const User = mongoose.model("users",schema)






app.get("/",(req,res)=>{
  console.log("App is running in route")
  res.send("Hello welcome the App")
})


// this  is the way to create post req and storeing the user in the database in hardcord manner
// app.post("/users/new",async(req,res)=>{
//    await User.create({
//     name:"sachikanta",
//     email:"sacj@gmail.com",
//     password:"jbdjcfmsdv", // for password we can use decrypt which we had seen in previous part
//   })

//   res.json({
//     success:true,
//     Message:"User Register Sucessfully"
//   })
// })

// getting from the body
app.post("/users/new",async(req,res)=>{
  //  first getting the data from the body
  const {name,email,password} = req.body


  // as the key value pair is same we can directly pass
  await User.create({
    name,email,password   
  })

  res.status(201).json({
    success:true,
    Message:"User Register Sucessfully"
  })
})

app.get("/users/all", async(req,res)=>{

  const users= await User.find();
 //  we should always send status code best practice
   res.json({
     success:true,
     Users:users,
   })
 })



//creating a api that from userid to return the user information with the help of req.body and query parmas for more explaination follow guide.txt

app.get ("/userid" ,async(req,res) =>{
  const {id} = req.body; //geting userId from url as query parmas and fetching the userId
   const user=await User.findById(id);  //finding the userINfo through userId from the database  ---- The lean() method is used to convert the Mongoose document to a plain JavaScript object without the circular reference.
    res.json({
      success:true,
      User:user,
    }) 
});


// how to do params dynamic    /userid/:id   by this the url will be dynamic and always set the dynamoc route in the last because in express it is top to bottom apporac code runs if the url will be same with dynamic and if dynamic url run first than all the url of same pattern will refer to that
//Note: the main thing is that variable which we set we will get in that key value pair for here it is id
// /userid/sachi and /userid/raul the url will be same but the id will be dynamic . benefits of this is you don't have to create seperate url for every one




// Start the server
app.listen(port, () => {
  console.log(`Server is running on ${port}`);
});
