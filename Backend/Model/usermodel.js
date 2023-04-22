let mongoose=require("mongoose")

let UserSchema=mongoose.Schema({
    firstname:{type:String,required:true},
    lasttname:{type:String,required:true},
    email:{type:String,required:true},
    phone:{type:String},
    password:{type:String,required:true},
    })
    const UserModel=mongoose.model("User",UserSchema)
    module.exports={UserModel} 