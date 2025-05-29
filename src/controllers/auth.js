import { request, response } from "express";

import { enviarMensaje } from "../helpers/mailer.js";
import user from "../models/user.js";
export const Login = (req = request, res = response) => {
    return res.send("Login");
};

export const generateCode = async (req = request, res = response) => {
    const { email } = req.params;
    console.log(email)
    const findUser = await user.findOne({ email });

    if (!findUser) return res.status(400).json({ mensaje: `Usuario con correo ${email} no existe` });

    let code = ''

    let numbers = '0123456789'

    for(let index = 0; index < 6; index++){

        const position = Math.floor(Math.random() * 9)
        code += numbers[position]
    }

    let result = await enviarMensaje(email, "Codigo de ingreso sistema VENTAS", `Codigo para ingresa: ${code}`);
    findUser.login_code = code
    await findUser.save()
    if(result) return res.status(201).json({result})
    


    
};
