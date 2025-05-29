import {request, response} from 'express'

export const Login = (req  = request, res = response) => {

    return res.send("Login")
}   

export const generateCode = (req  = request, res = response) => {

    return res.send('Generacion codigo')
}