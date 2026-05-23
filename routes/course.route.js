import express from 'express'
import { getCourse,getCourses,postCourse,deleteCourse, putCourse} from '../controllers/course.controllers.js'

const router = express.Router()

router.get('/', getCourses)

router.get('/:id', getCourse)

router.post('/', postCourse)

router.delete('/:id',deleteCourse)

router.put('/:id',putCourse)

export default router