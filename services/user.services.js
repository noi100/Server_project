import { UserModel } from "../models/modelUser.js";

export async function getAllUsers(){
   const user= await UserModel.find()
   if(!user||user.length===0)
    throw new Error("not find user")
   return user;
}

export async function getUserById(id) {
    const userId= await UserModel.findById(id)
    if(!userId||userId.length===0)
        throw new Error("not find user by this id")
       return userId;
}

export async function createtUser(user) {
    return await UserModel.create(user)
}

export async function removeUser(id) {
    return await UserModel.findByIdAndDelete(id)
}

export async function updateUser(id,User) {
    return await UserModel.findByIdAndUpdate(id,User,{new:true})
}