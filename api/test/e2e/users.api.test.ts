import { IUser } from './../../src/db/interfaces'
import userModel from '../../src/db/models/users.model'
import supertest from 'supertest'


export default function usersE2E(api:supertest.SuperTest<supertest.Test>, mockedUsers:IUser[]){

  describe('Users end-points', ()=>{
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
  
    describe('PUT /vx/user', ()=>{
      let r: any
      let _r: any
      let __r: any
  
      beforeAll(async ()=>{
        r = await api.put(`/v1/user/${mockedUsers[0].name}`).send({
          "name": `${mockedUsers[0].name}`,
          "mail": 'nuevomailUsuario@gmail.com'
        })
        _r = await api.put('/v1/user/usuarioNoExistente').send({
          name: mockedUsers[0].name,
          mail: 'nuevomailUsuario@gmail.com'
        })
        __r = await api.put(`/v1/user/${mockedUsers[0].name}`).send({})
      })
  
      test('get correct status code when user is updated', ()=>{
        expect(r.statusCode).toBe(200)
      })
      test('get correct status code when user to update does not exist', ()=>{
        expect(_r.statusCode).toBe(202)
      })
      test('get correct status code when no data is being sent', ()=>{
        expect(__r.statusCode).toBe(400)
      })
  
      test('check if user data have been updated successfully', async ()=>{
        let _ = await userModel.findOne({name: mockedUsers[0].name})
        _ ? expect(_.mail).toContain('nuevomailUsuario@gmail.com') : ""
      })
    })
  
    describe.skip('DELETE /vx/user', ()=>{
      let r: any
      let _r: any
      let __r: any
  
      beforeAll(async()=>{
        r = await api.delete(`/v1/user/${mockedUsers[mockedUsers.length - 1].name}`)
        _r = await api.delete(`/v1/user/usuarioNoExistente`)
        __r = await api.delete(`/v1/user`)
      })
  
      test('get correct status code when user have been deleted', ()=>{
        expect(r.statusCode).toBe(200)
      })
      test('get correct status code when user does not exists', ()=>{
        expect(_r.statusCode).toBe(202)
      })
      test('get correct status code when request body is incomplete ', ()=>{
        expect(__r.statusCode).toBe(404)
      })
    })

  })

}