import dotenv from 'dotenv'
import path from 'path'

const config = ()=>{
  dotenv.config({
    path: path.resolve(__dirname, './../.env')
  })
}

export default config