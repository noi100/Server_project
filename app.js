import express from 'express'
import usersRouter from './routes/users.route.js'
import coursesRouter from './routes/course.route.js'
import { GlobalMiddleware } from './middlewares/global.middlewares.js'
import { errorHandler } from './middlewares/error.middlewares.js'


const app = express()

app.use(GlobalMiddleware)
app.use(express.json())

app.use('/User', usersRouter)
app.use('/course', coursesRouter)

app.use(errorHandler)

export default app