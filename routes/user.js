
const express = require('express')
const router = express.Router();
const User = require('../models/user')
const getallUsers = require("../controllers/getallUsers")
const newUser = require('../controllers/newUser')

router.get("/",(req,res)=>{
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
  router.post("/new",newUser)
  
  router.get("/all", getallUsers)
  
  router.get("/userid/special",(req,res)=>{
    res.json({
        success:true,
        message:"Joking",
    })
  })
  
  //creating a api that from userid to return the user information with the help of req.body and query parmas for more explaination follow guide.txt
  
  router.get ("/userid/:id" ,async(req,res) =>{
    // const {id} = req.body; //geting userId from url as query parmas and fetching the userId
    const {id} = req.params;
    const user=await User.findById(id);  //finding the userINfo through userId from the database  ---- The lean() method is used to convert the Mongoose document to a plain JavaScript object without the circular reference.
      res.json({
        success:true,
        user:user,
      }) 
  });
  
  
// to create multiple route 
// router.route("/userid/:id").get(getUserDetails).put(updateUser).delete(deleteUser)

  // how to do params dynamic    /userid/:id   by this the url will be dynamic and always set the dynamoc route in the last because in express it is top to bottom apporac code runs if the url will be same with dynamic and if dynamic url run first than all the url of same pattern will refer to that
  //Note: the main thing is that variable which we set we will get in that key value pair for here it is id
  // /userid/sachi and /userid/raul the url will be same but the id will be dynamic . benefits of this is you don't have to create seperate url for every one
  
  module.exports = router;  //beacuse here we want to export all the router