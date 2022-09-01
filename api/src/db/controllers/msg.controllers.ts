import msgModel from "../models/msgs.model"
import { ResponseObject } from '../interfaces'
import mongoose from "mongoose"

export function getMsgsByUser (userName: string): Promise<ResponseObject> {
  return new Promise((resolve, reject)=>{
    msgModel.aggregate([{
      $lookup: {
        from: "users",
        localField: "from",
        foreignField: "_id",
        as: "sender",
      }
    },{
      $unwind: {
        path: "$sender"
      }
    },{
      $match:{
        "sender.name": userName
      }
    }]).exec()
    .then((results)=>{
      resolve({
        result: results,
        code: 200
      })
    })
    .catch()
  })
}

export function deleteMsg(messageId: string): Promise<ResponseObject>{
  return new Promise((resolve, reject)=>{

    // Delete message from msgs collection
    msgModel.findByIdAndDelete({_id: new mongoose.Types.ObjectId(messageId)})

    // Delete message from rooms collection
    // TODO: Implement cascade logic when we are deleting a message
  })
}