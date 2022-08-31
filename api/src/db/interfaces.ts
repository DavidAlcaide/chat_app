import { Schema, LeanDocument } from 'mongoose'

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
  closed: boolean,
  msgs: Schema.Types.ObjectId[]
}

export interface ResponseObject {
  result?: string | LeanDocument<IUser & any> |
                    LeanDocument<IMsg & any> |
                    LeanDocument<IRoom & any> |
                    Array<LeanDocument<IMsg & any> | 
                    IRoom & any>,
  code: ResponseCode
}

type ResponseCode = 202 | 303 | 404 | 505;

export interface updateObject {
  [index: string] : any 
}