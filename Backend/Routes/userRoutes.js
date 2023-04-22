const express=require("express");
const { UserModel } = require("../Model/usermodel");
const UserRouter=express.Router();
const bcrypt=require("bcrypt")
UserRouter.get("/followers/:id",async(req,res)=>{
let id=req.params.id;
try{
let user=await UserModel.findById({_id:id});
let followers=user.followers;
res.status(200).send(followers);
}catch(err){
res.status(400).send({msg:"Something went wrong while getting the followers"});
}
})
UserRouter.post("/resistor",async(req,res)=>{
    const {email,firstname,lastname,password,phone}=req.body;
    const user =await UserModel.findOne({email});
     if(user){
        res.status(400).send([{msg: 'User Already Exits Please login'}]);
     }

else {
    try{
    bcrypt.hash(pass,7,async(err,secure_password)=>{
    if(err){

        res.status(500).send({msg:"Please try again"});

    }else {
        const user=new UserModel({firstname,lastname,password:secure_password,email,phone});
        await user.save();
        res.send([{ msg: 'Resistered Succesfully'}]);
    }
    })
    }catch(err){
        res.status(400).send([{ msg: 'Error While Resistroring The User'}]);
    }
}
    })
    UserRouter.patch("update_social_media/:id",async(req,res)=>{
        let payload=req.body
        try{ 
        await UserModel.findByIdAndUpdate({_id:id},{social_media_url:payload});
        res.status(200).send({msg:"Update succesfully"});
        }catch(err){
        res.status(400).send({msg:"Something went wrong while update URLs"});
        }
})

UserRouter.patch("update_interests/:id",async(req,res)=>{
    let payload=req.body
    try{ 
    await UserModel.findByIdAndUpdate({_id:id},{social_media_url:payload});
    res.status(200).send({msg:"Update succesfully"});
    }catch(err){
    res.status(400).send({msg:"Something went wrong while update URLs"});
    }
})

UserRouter.post("/login",async(req,res)=>{
    let {email,pass}=req.body;
    try{
    const user =await UserModel.findOne({email})
    if(user){
    bcrypt.compare(pass,user.pass,(err,result)=>{
    if(result){
        res.status(200).send({"msg":"Login Succesfully","token":token})
    }
    else if(!result){
        res.status(400).send([{msg:"Please Enter Correct Password"}])
    }
    })
    }else {
        res.status(400).send([{msg:"User Not Found Please Signup First."}])
    }
    }catch(err){
        res.status(400).send({msg:err})
    }
    })

UserRouter.patch("update_password/:id",async(req,res)=>{
    let payload=req.body
let previous_password=payload.password
    try{ 
    await UserModel.findByIdAndUpdate({_id:id},{social_media_url:payload})
    res.status(200).send({msg:"Update succesfully"});
    }catch(err){
    res.status(400).send({msg:"Something went wrong while update URLs"});
    }
})
module.exports={UserRouter}




