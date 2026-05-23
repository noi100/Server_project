
import express from 'express'
import { getUsers,getUser,postUser,deleteUser,putUser} from '../controllers/user.controllers.js'


const router = express.Router()

router.get('/',getUsers)

router.get('/:id',getUser)

router.post('/',postUser)

router.delete('/:id',deleteUser)

router.put('/:id',putUser)

export default router