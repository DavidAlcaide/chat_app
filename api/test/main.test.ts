import supertest from "supertest"
import app from '././../src/app'
import mongoose from 'mongoose'
import { IUser } from "../src/db/interfaces"
import userModel from "../src/db/models/users.model"

import usersE2E from "./e2e/users.api.test"

const api = supertest(app)

let usersData: IUser[] = [
  {
    name: "nombreUsuario1",
    mail: "nombreUsuario1@gmail.com",
    reg_timestamp: Date.now()
  },{
    name: "nombreUsuario2",
    mail: "nombreUsuario2@gmail.com",
    reg_timestamp: Date.now()
  },{
    name: "nombreUsuario3",
    mail: "nombreUsuario3@gmail.com",
    reg_timestamp: Date.now()
  }
]


beforeAll( async()=>{

  await userModel.deleteMany({})

  usersData.forEach(async (userData)=>{
    let _ = new userModel(userData)
    await _.save()
  })

}, 15000)


describe('E2E api testing', ()=>{
  
  usersE2E(api, usersData)

})

afterAll(async()=>{
  await mongoose.connection.close()
})