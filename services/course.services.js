import { courseModel } from "../models/modelCourse.js";

export async function getAllCourses(){
    const course= await courseModel.find()
    if(!course||course.length===0)
    throw new Error("not find cors")
    return course;
    
}

export async function getCourseById(id) {
    const courseId= await courseModel.findById(id)
    if(!courseId||courseId.length===0)
        throw new Error("not find cors by this id")
        return courseId;
}

export async function createCourse(course){
    return await courseModel.create(course)
}

export async function removeCourse(id) {
    return await courseModel.findByIdAndDelete(id)
}

export async function updateCourse(id, course) {
    return await courseModel.findByIdAndUpdate(id,course,{new:true})
}