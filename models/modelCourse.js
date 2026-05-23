import { model, Schema } from "mongoose";

const courseSchema= new Schema({
    name:{
       require: true,
       type:String
    },
    price:{
        require: true,
        type:String,
    },
    description:{
        type:String
    }
})

export const courseModel=model('course',courseSchema)