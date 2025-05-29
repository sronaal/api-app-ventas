const express = require("express")
const cors = require("cors")
require("dotenv").config()


const { conexionDB } = require("./conexion")

const app = express()

app.use(express.json())
app.use(cors())

conexionDB()
module.exports = app