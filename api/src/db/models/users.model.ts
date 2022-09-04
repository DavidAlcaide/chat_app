import { Schema, model } from 'mongoose'
import { IUser } from './../interfaces'

const userSchema: Schema<IUser> = new Schema({
  name: {type: String, required:true, unique: true, index: true},
  mail: {type: String, required: true, unique: true},
  reg_timestamp: {type: Number, required: true}
})

const userModel = model<IUser>('users', userSchema)

export default userModel