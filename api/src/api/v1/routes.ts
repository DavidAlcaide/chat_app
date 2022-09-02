import express, { Request, Response, Router } from 'express'
import * as userControllers from './../../db/controllers/user.controllers'
import * as msgControllers from './../../db/controllers/msg.controllers'
import * as roomControllers from './../../db/controllers/room.controllers'

const router: Router = express.Router()


// USERS END POINTS

// Get user information

router.get('/v1/user/:userName', (req: Request, resp: Response)=>{
  if(req.params.userName){
    userControllers.getUserData(req.params.userName)
    .then((r)=>{
      resp.status(r.code)
      resp.json(r.result)
    })
    .catch((r)=>{
      resp.sendStatus(r.code)
    })
  }else{
    resp.sendStatus(400)
  }
})

// Create user

router.post('/v1/user', (req: Request, resp: Response)=>{
  if(req.body.name && req.body.mail){
    userControllers.createUser({
      name: req.body.name,
      mail: req.body.mail
    })
    .then((r)=>{
      resp.sendStatus(r.code)
    })
    .catch((r)=>{
      resp.sendStatus(r.code)
    })
  }else{
    resp.sendStatus(400)
  }
})

// Delete user
router.delete('/v1/user/:userName', (req: Request, resp: Response)=>{
  userControllers.deleteUser(req.params.userName)
    .then((r)=>{
      resp.sendStatus(r.code)
    })
    .catch((r)=>{
      resp.sendStatus(r.code)
    })
})

// Update existing user
router.put('/v1/user', (req: Request, resp: Response)=>{
  if(req.body.name && Object.keys(req.body).length != 1){
    resp.sendStatus(200)
  }else{
    console.log(req.body)
    resp.sendStatus(400)
  }
})


// MSGS END POINTS

// Get all messages from a user

router.get('/v1/msg/:userName', (req: Request, resp: Response)=>{

})

// Delete existing message

router.delete('/v1/msg/messageId', (req: Request, resp: Response)=>{

})

// TODO: Insert endpoint to save a reaction to an existing message

/* 

router.put('/v1/msg/reaction/:messageId', (req: Request, resp: Response)=>{

})

*/

// ROOMS END POINTS

//Get all messages from a chatRoom
router.get('/v1/chatRoom/:chatRoomId', (req: Request, resp: Response)=>{

})

// Create new chatRoom
router.post('/v1/chatRoom', (req: Request, resp: Response)=>{
  
})

// Delete an existing chatroom
router.delete('/v1/chatRoom/:chatRoomId', (req: Request, resp: Response)=>{
  
})


export function suma(a:number, b:number){
  return a + b
}



export default router