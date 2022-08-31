import mongoose, { ConnectOptions } from "mongoose"
import { dbConnectionError, dbInternalError } from "./errors"

const connectDb = ()=>{
  const dbOptions: ConnectOptions = {
    dbName: process.env.DB_NAME,
    user: process.env.DB_USER,
    pass: process.env.DB_PASS,
    authSource: process.env.DB_NAME,
    authMechanism: "DEFAULT"
  }

  const db_uri: string = `mongodb://${process.env.DB_SERVER}:${process.env.DB_PORT}`
  
  mongoose.connect(db_uri)
  // Control connection and error events

  mongoose.connection.on('connected', ()=>{
    console.log(`Connected to Database`)
  })
  mongoose.connection.on('error', (error)=>{
    throw new dbInternalError(error.message)
    
  })
}

export default connectDb