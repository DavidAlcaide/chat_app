import express, { Request, Response, Router } from 'express'

const router: Router = express.Router()


// USERS END POINTS

// Get user information

router.get('/v1/user/:userName', (req: Request, resp: Response)=>{
  
})

// Create user

router.post('/v1/user', (req: Request, resp: Response)=>{
  
})

// Delete user
router.delete('/v1/user/:userName', (req: Request, resp: Response)=>{
  
})

// Update existing user
router.put('/v1/user/:userName', (req: Request, resp: Response)=>{
  
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






export default router