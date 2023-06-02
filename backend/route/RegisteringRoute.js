const express=require('express');
const router=express.Router();
const User = require('../modal/RegisteringModal');

router.post('login',async (req,res)=>{
try{

const {name , surname , age , email , gender, dateOfBirth , phoneNumber ,password}=req.body;
const user =await User.findOne({email});
const isValidPassword =await user.isValidPassword(password);

const newUser = new User(name, surname, age, email, gender, dateOfBirth, phoneNumber, password);
try{
    await newUser.save();
    res.status(200).json({message: 'Success'});
}catch(errors){
    console.log(errors);
    res.status(500).json({message: 'failed'});
}
if(! user)
{
return res.status (401).json({message:'Invalid email or password. Please try again.'})
}
if(! isValidPassword)
{
return res.status (401).json({message:'Invalid email or password. Please try again.'})
}

}
catch(error)
{
console.log(error);
res.status(500).json({message:'server error'});
}

});
module.exports=router;