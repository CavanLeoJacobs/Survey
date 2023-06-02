const mongoose =require('mongoose');

const userSchema =new mongoose.Schema({

             name: {
             type:String,
             required:true,
             },
             surname:{
             type:String,
             required:true,

             },
             age:{
             type:Number,
             required:true,


             },
             phoneNumber :{
             type:String,
             required:true,

             },
             dateOfBirth:{
             type:Date,
             required:true,


             },


             email:{
             type:String,
             required:true,
             unique:true,

             },
             gender :{
             type:String,
             required:true,

             },
             password:{
             type:String,
             required:true,

     }
});

const User = mongoose.model('User',userSchema);
module.exports=User;

