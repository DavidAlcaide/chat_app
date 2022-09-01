import axios from 'axios'
import { IUser } from '../../src/db/interfaces'
import userModel from '../../src/db/models/users.model'
import * as controllers from './../../src/db/controllers/user.controllers'

const usersMocked: IUser[] = [
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

  test('Should return statusCode equal to 200', async ()=>{
    let r = await axios.get('http://127.0.0.1:1992/v1/user/nombreUsuario1')
    console.log(r)
    expect(r.status).toBe(200)
  })
})
