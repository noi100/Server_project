import { getAllCourses,getCourseById,createCourse,removeCourse,updateCourse} from "../services/course.services.js"


export async function getCourses(req, res,next) {
    try{
        const course = await getAllCoursees()
        res.json(course)
    }
    catch(err)
    {
        next(err)
    }
    
}

export async function getCourse(req, res,next) {
    try{
        const id = req.params.id
        const course =await getCourseById(id)
        res.json(course)
    }
    catch(err){
        next(err)
    }

}


export async function postCourse(req, res,next) {
    try{
        const course = req.body
        await createCourse(course)
        res.status(201)
        res.send('course added')
        }
    catch(err){
        next(err)
    }
}

export async function deleteCourse(req,res,next) {
    try{
        const id = req.params.id;
        await removeCourse(id);
        res.send('the course deleted')
    }
    catch(err)
    {
        next(err)
    }
}

export async function putCourse(req,res,next) {
    try{
        const id = req.params.id;
        const courseData = req.body;
        await updateCourse(id, courseData);
        res.send('the course updte')
    }
    catch(err){
    next(err)
    }
}