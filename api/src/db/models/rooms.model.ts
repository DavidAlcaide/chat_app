import { Schema, model } from 'mongoose'
import { IRoom } from './../interfaces'

const roomSchema: Schema<IRoom> = new Schema({
  users: [{type: Schema.Types.ObjectId, required:true, ref: "users"}],
  creation_timestamp: {type: Number, required: true},
  closed: {type: Boolean, required: true},
  msgs: [{type: Schema.Types.ObjectId, required: true, ref: "users" }]
})

const roomModel = model<IRoom>('users', roomSchema)

export default roomModel