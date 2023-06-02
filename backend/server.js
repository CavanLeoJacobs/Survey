const mongoose= require('mongoose');
const express = require('express');
const cors = require('cors');
 const User = require('../backend/modal/RegisteringModal');

const app = express();

const RegisteringUrls=require('./route/RegisteringRoute');

 mongoose.connect('mongodb+srv://cavanleojacobs:Sz9MT1kPBfVjqs1J@cluster0.5wpr9xq.mongodb.net/?retryWrites=true&w=majority',

{useNewUrlParser: true,
useUnifiedTopology:true }).then(()=>{console.log("connect to MongoDB");
}).catch((error)=>{
console.log('Error connecting to MongoDB:',error);
});
app.use(express.json())
app.use('./app',RegisteringUrls)
app.use(cors());

  app.post("/registerUser", async (req,res) => {

  const userData = req.body;
    const  newUserData = new User(userData);
    await newUserData.save();

    res.json(userData);
 });
//  app.post("/Registering", async (req,res) => {
//
//  const userData = req.body;
//    const  newUserData = new User(userData);
//    await newUserData.save();
//
//    res.json(userData);
//  });




app.listen(4000, ()=>console.log("server is up and running"));