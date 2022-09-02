import { IMsg } from '../../src/db/interfaces'
import supertest from 'supertest'
import app  from './../../src/app'
import mongoose from 'mongoose'
import msgModel from '../../src/db/models/msgs.model'
import userModel from '../../src/db/models/users.model'


describe.skip('Msgs end - points', ()=>{

  beforeAll(async()=>{

    let mockedMsgs: IMsg[] = [{
      content: 'Texto del mensaje 1',
      from: await userModel.findOne({name: "nombreUsuario1"})["_id"],
      to: await userModel.findOne({name: "nombreUsuario2"})["_id"],
      timestamp: Date.now()
    }]

    // Delete all previous msgs

    //msgModel.deleteMany({})

    // Insert new msgs for testing
    /* mockedMsgs.forEach(async (msg)=>{
      let _msg = new msgModel(msg)
      await _msg.save()
    }) */
  })

  test('Suma', ()=>{
    expect(2+2).toBe(4)
  })

})