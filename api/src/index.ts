import app from './app'

const port: number = process.env.SERVER_PORT ? parseInt(process.env.SERVER_PORT) : 8080

const server = app.listen(port, ()=>{
  console.log(`Server listening on port ${port}`)
})

export default server