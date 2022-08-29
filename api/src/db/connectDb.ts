import mongoose, { ConnectOptions } from "mongoose"
import { dbConnectionError, dbInternalError } from "./errors"

const connectDb = ()=>{
  const dbOptions: ConnectOptions = {
    dbName: 'chat_app',
    user: process.env.DB_NAME,
    pass: process.env.DB_PASS,
    authSource: process.env.DB_NAME 
  }

  const db_uri: string = `mongodb://${process.env.DB_SERVER}:${process.env.DB_PORT}`
  mongoose.connect(db_uri, dbOptions)
  .then(()=>{
    console.log(`Connected to database ${dbOptions.dbName}`)
  })
  .catch((err)=>{
    throw new dbConnectionError()
  })

  // Control connection and error events

  mongoose.connection.on('connected', ()=>{})
  mongoose.connection.on('error', (error)=>{
    throw new dbInternalError(error.message)
    
  })
}

export default connectDb