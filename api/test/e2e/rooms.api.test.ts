import { IRoom } from "../../src/db/interfaces"
import roomModel from "../../src/db/models/rooms.model"
import supertest from "supertest"

export default function roomE2E(api:supertest.SuperTest<supertest.Test>, mockedMsg:any[], mockedRooms:any[]){
  describe('Rooms end-points', ()=>{
    
    describe('GET /vx/chatRoom/chatRoomId', ()=>{
      
      let r: any
      let _r: any
      let __r: any


      beforeAll(async ()=>{
        r = await api.get(`/v1/chatRoom/${mockedRooms[0]._id}`)
        _r = await api.get(`/v1/chatRoom/salaNoExistente`)
        __r = await api.get('/v1/chatRoom/')
      })

      test('get correct status code when chat room msgs are listed', ()=>{
        expect(r.statusCode).toBe(200)
      })
      test('get correct status code when chat room does not exist', ()=>{
        expect(_r.statusCode).toBe(202)
      })
      test('get correct status code in a bad request', ()=>{
        expect(__r.statusCode).toBe(400)
      })

    })

    describe('POST /vx/chatRoom/chatRoomId', ()=>{
      
      let r: any
      let _r: any
      let __r: any


      beforeAll(async ()=>{
        r = await api.post(`/v1/chatRoom`).send()
        _r = await api.post(`/v1/chatRoom/salaNoExistente`)
        __r = await api.get('/v1/chatRoom/')
      })

      test('get correct status code when chat room has been created successfully', ()=>{
        expect(r.statusCode).toBe(200)
      })
      test('get correct status code when chat room does not exist', ()=>{
        expect(_r.statusCode).toBe(202)
      })
      test('get correct status code in a bad request', ()=>{
        expect(__r.statusCode).toBe(400)
      })

    })

  })
}