const express = require("express");
const app = express();
const port = 5000;
const userRouter = require('./routes/user')


require('dotenv').config({
    path:"./data/config.env"
})
app.use(express.json());  //using middleware to pass json data

//previously we alos know that what ever we need to use in app just add app.use
app.use("/users",userRouter);

// how to add prefix url through Router app.use("/prefix",userRouter)


// Start the server
module.exports =app;