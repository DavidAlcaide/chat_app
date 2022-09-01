import roomModel from './../models/rooms.model'
import msgModel from './../models/msgs.model'
import { ResponseObject, IRoom } from '../interfaces'
import mongoose from "mongoose"

// Function to get all messages associated to a chatRoom
export function getMsgsByRoom(chatRoomId: string): Promise<ResponseObject>{
  return new Promise((resolve, reject)=>{
  roomModel.find({_id: new mongoose.Types.ObjectId(chatRoomId)}).populate('msgs').lean() //TODO: Check if this populate command works or we have to do that by using aggregations
  .then((results)=>{
      resolve({
        code: 200,
        result: results
      })
    })
    .catch((err)=>{
      reject({
        code: 505
      })
    })
  })
}

// Function to create new chatRoom
export function createChatRoom(roomObject: IRoom): Promise<ResponseObject>{
  return new Promise((resolve, reject)=>{
    let _room = new roomModel(roomObject).save()
    .then((r)=>{
      resolve({
        code: 200
      })
    })
    .catch((err)=>{
      reject({
        code: 505
      })
    })
  })
}

// Function to remove an existing chatRoom
export async function deleteChatRoom (chatRoomId: string): Promise<ResponseObject>{
    try{
      let _room = await roomModel.findOneAndDelete({
        _id: new mongoose.mongo.ObjectId(chatRoomId)
      })

      await msgModel.deleteMany({
        $in: ["_id", _room]
      })

      return {
        code: 200
      }

      // TODO: Check if this function works with

    }catch(err){
      // TODO: Implement error handling
      return {
        code: 505
      }
    }
}