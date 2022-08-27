import express, { Request, Response, Router } from 'express'

const router: Router = express.Router()


// USERS END POINTS

router.get('/user/:userName', (req: Request, resp: Response)=>{

})

router.post('/addUser', (req: Request, resp: Response)=>{
  
})

router.post('/deleteUser/:userName', (req: Request, resp: Response)=>{
  
})

router.post('/updateUser/:userName', (req: Request, resp: Response)=>{
  
})


// MSGS END POINTS


router.get('/msgs/:chatroomId', (req: Request, resp: Response)=>{

})

router.post('/sendMsg', (req: Request, resp: Response)=>{
  
})

router.post('/deleteMsg', (req: Request, resp: Response)=>{
  
})


export default router