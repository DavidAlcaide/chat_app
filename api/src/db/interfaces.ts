import { Schema } from 'mongoose'

export interface IUser {
  name: string,
  mail: string,
  reg_timestamp: number
}

export interface IMsg {
  content: string,
  from : Schema.Types.ObjectId,
  to: Schema.Types.ObjectId,
  timestamp: number
}

export interface IRoom {
  users: Array<Schema.Types.ObjectId>,
  creation_timestamp: number,
  closed: boolean
}