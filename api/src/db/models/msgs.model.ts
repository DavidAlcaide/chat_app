import { Schema, model } from 'mongoose'
import { IMsg } from './../interfaces'

const msgSchema: Schema<IMsg> = new Schema({
  content: {type: String, required:true, unique: true},
  from: {type: Schema.Types.ObjectId, required: true, unique: true},
  to: {type: Schema.Types.ObjectId},
  timestamp: {type: Number, required: true}
})

const msgModel = model<IMsg>('msgs', msgSchema)

export default msgModel