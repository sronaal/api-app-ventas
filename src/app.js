import express from 'express' 
import cors from 'cors'
import 'dotenv/config'



import conexionDB from './conexion.js'
const app = express()

app.use(express.json())
app.use(cors())

conexionDB()

export default app