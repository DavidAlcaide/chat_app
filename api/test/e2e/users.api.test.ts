import { IUser } from '../../src/db/interfaces'
import supertest from 'supertest'
import app  from './../../src/app'
import mongoose from 'mongoose'
import userModel from '../../src/db/models/users.model'

const api = supertest(app)


let mockedUsers: IUser[] = [
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
describe('Users end-points', ()=>{
  
  beforeAll(async()=>{
    // Remove actual database state
    await userModel.deleteMany({})

    // Create documents only for testing

    mockedUsers.forEach(async (user)=>{
      let _user = new userModel(user)
      await _user.save()
    })

  })

  describe('GET /vx/user', ()=>{
    let r: any
    let _r: any

    beforeAll(async()=>{
      r = await api.get(`/v1/user/${mockedUsers[0].name}`)
      _r = await api.get('/v1/user/usuarioNoExistente')
    })

    test('get correct status code when user exists', ()=>{
      expect(r.statusCode).toBe(200)
    })

    test('get correct status code when user does not exist', ()=>{
      expect(_r.statusCode).toBe(204)
    })
  
    test('obtaining correct data when user exists',  ()=>{
  
      expect(r.body).toBeTruthy()
      expect(r.body).toHaveProperty("name")
      expect(r.headers['content-type']).toMatch(/application\/json/)
    
    })
  })
  

  describe('POST /vx/user', ()=>{
    let r: any
    let _r: any
    let __r: any
    beforeAll(async()=>{
      mockedUsers.push({
        name: "nombreUsuario4",
        mail: "nombreUsuario4@gmail.com"
      })
      r = await api.post('/v1/user')
      .send(mockedUsers[mockedUsers.length - 1])
      _r = await api.post('/v1/user')
      .send({
        name: "Missing fields test"
      })
      __r = await api.post('/v1/user').send(mockedUsers[mockedUsers.length - 1])
    })

    test('get correct status code when user have been created successfully', async ()=>{
      expect(r.statusCode).toBe(200)
    })

    test('get correct status code when sent data is not correct', ()=>{
      expect(_r.statusCode).toBe(400)
    })
    
    test('get correct status code when trying to create repeat user', ()=>{
      expect(__r.statusCode).toBe(500)
    })
  })

  describe('DELETE /vx/user', ()=>{
    let r: any
    let _r: any
    let __r: any

    beforeAll(async()=>{
      r = await api.delete(`/v1/user/${mockedUsers[0].name}`)
      _r = await api.delete(`/v1/user/usuarioNoExistente`)
      __r = await api.delete(`/v1/user`)
    })

    test('get correct status code when user have been deleted', ()=>{
      expect(r.statusCode).toBe(200)
    })
    test('get correct status code when user does not exists', ()=>{
      expect(_r.statusCode).toBe(202)
    })
    test('get correct status when request body is incomplete ', ()=>{
      expect(__r.statusCode).toBe(404)
    })
  })

  describe('PUT /vx/user', ()=>{
    let r: any
    let _r: any
    let __r: any

    beforeAll(async ()=>{
      r = await api.put('/v1/user').send({
        name: mockedUsers[0].name,
        mail: 'nuevomailUsurio@gmail.com'
      })
    })
  })

  afterAll(async ()=>{
    await mongoose.connection.close()
  })
})
