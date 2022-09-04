import { Schema, model } from 'mongoose'
import { IMsg } from './../interfaces'

const msgSchema: Schema<IMsg> = new Schema({
  content: {type: String, required:true, unique: true},
  from: {type: Schema.Types.ObjectId, required: true, ref:"users"},
  to: {type: Schema.Types.ObjectId, require:true, ref: "users" },
  timestamp: {type: Number, required: true}
})

const msgModel = model<IMsg>('msgs', msgSchema)

export default msgModel