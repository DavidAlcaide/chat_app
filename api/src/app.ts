import express, { Application } from 'express'
import helmet from 'helmet'
import config from './config'
import router from './api/routes'

config()

const app: Application = express()

app.use(helmet())
app.use(express.json())


export default app