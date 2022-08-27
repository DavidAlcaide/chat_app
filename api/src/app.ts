import express, { Application } from 'express'
import helmet from 'helmet'

const app: Application = express()

app.use(helmet())
app.use(express.json())


export default app