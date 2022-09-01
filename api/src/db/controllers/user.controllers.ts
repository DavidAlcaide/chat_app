import { IUser, ResponseObject, updateObject } from '../interfaces'
import userModel from './../models/users.model'

export function createUser(userData: IUser): Promise<ResponseObject>{
  return new Promise((resolve, reject)=>{
    let user = new userModel({
      mail: userData.mail,
      name: userData.name,
      reg_timestamp: Date.now()
    })

    user.save()
    .then(()=>{
      resolve({
        code: 202
      })
    })
    .catch((err)=>{
      console.log(err.message)
      reject({
        code: 500
      })
    })
  })
}

export function deleteUser (userName:string):Promise<ResponseObject>{
  return new Promise((resolve, reject)=>{
    // Delete user from users collection
    userModel.findOneAndDelete({name: userName}).exec()
    .then(()=>{
      resolve({
        code: 202
      })
    })
    .catch((err)=>{
      reject({
        code: 505
      })
    })

    // TODO: Implement cascade logic when we are deleting users -> Theoreticaly, when we remove a user we have to close, or something like that, chat rooms composed by two people (this user and other person)

    

  })
}

export function updateUser(userName: string, updateData:updateObject):Promise<ResponseObject>{
  return new Promise((resolve, reject)=>{
    userModel.aggregate([{
      $match:{
        name: userName
      }
    },{
      $set: updateData
    }]).exec()
    .then((result)=>{
      resolve({
        code: 202
      })
    })
    .catch((err)=>{
      reject({
        code: 505
      })
    })
  })
}


export function getUserData (userName: string): Promise<ResponseObject> {
  return new Promise((resolve, reject)=>{
    userModel.find({name: userName}).lean()
    .then((result)=>{
      resolve({
        result: result,
        code: 202
      })
    })
    .catch((err)=>{
      reject({
        code: 500
      })
    })
  })
}