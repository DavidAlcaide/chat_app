import { Schema, model } from 'mongoose'
import { IRoom } from './../interfaces'

const roomSchema: Schema<IRoom> = new Schema({
  users: {type: [Schema.Types.ObjectId], required:true},
  creation_timestamp: {type: Number, required: true},
  closed: {type: Boolean, required: true}
})

const roomModel = model<IRoom>('users', roomSchema)

export default roomModel