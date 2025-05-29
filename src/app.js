import express from 'express' 
import cors from 'cors'
import dotenv from 'dotenv';
dotenv.config({ path: '../.env'});

import conexionDB from './conexion.js'
import authRoutes from './routes/auth.js'

const app = express()

app.use(express.json())
app.use(cors())

app.use('/api/auth', authRoutes)

conexionDB()

export default app