import { model, Schema } from "mongoose";

const userSchema= new Schema({
    name:{
       require: true,
       type:String
    },
    mail:{
        require: true,
        type:String,
        validate:{
            validator:v=>v.include('@'),
            message:"הכנס כתובת מייל"
        }
    },
    course:{
        require: true,
        type:String
    }
})

export const UserModel=model('User',userSchema)