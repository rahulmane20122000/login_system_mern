const express=require("express");
const router=express.Router();
const User=require("../user/userSchema");
require("../conn");
router.post('/register',async(req,res)=>{
        const{name,email,phone,work,password,cpassword}=req.body;
        try{
           const userExist=await User.findOne({email:email});
           const user=new User({name,email,phone,work,password,cpassword});
           userExist? res.status(422).json({error:"user exist"}):user.save();
        }catch(err){
                console.log(err);
        }
        
});
module.exports=router;