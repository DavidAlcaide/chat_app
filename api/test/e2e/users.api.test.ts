import { IUser } from '../../src/db/interfaces'
import supertest from 'supertest'
import app  from './../../src/app'
import mongoose from 'mongoose'
import userModel from '../../src/db/models/users.model'

const api = supertest(app)


const mockedUsers: IUser[] = [
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

describe('GET /vx/user', ()=>{

  beforeAll(async()=>{
    // Remove actual database state
    await userModel.deleteMany({})

    // Create documents only for testing

    mockedUsers.forEach(async (user)=>{
      let _user = new userModel(user)
      await _user.save()
    })

  })

  afterAll( ()=>{
    mongoose.connection.close()
  })

  test('get correct status code and response type', async ()=>{
   const r = await api.get(`/v1/user/${mockedUsers[0].name}`)

   expect(r.statusCode).toBe(200)

   expect(r.headers['content-type']).toMatch(/application\/json/)
    
  })

  test('obtaining correct data in terms of structure and quantity', async ()=>{
    const r = await api.get(`/v1/user/${mockedUsers[0]}`)
    expect(r.body).toBeInstanceOf(undefined)
  })
})
