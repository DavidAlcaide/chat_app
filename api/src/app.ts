import express, { Application } from 'express'
import helmet from 'helmet'
import config from './config'
import router from './api/v1/routes'
import connectDb from './db/connectDb'

config()
try{
  connectDb()
}catch(err:any){
  console.log("Error:")
  console.error(err.message)
}

const app: Application = express()

app.use(helmet())
app.use(express.json())
app.use(router)


export default app