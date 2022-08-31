import express, { Application } from 'express'
import helmet from 'helmet'
import config from './config'
import router from './api/v1/routes'
import connectDb from './db/connectDb'

config()
connectDb()

const app: Application = express()

app.use(helmet())
app.use(express.json())
app.use(router)


export default app