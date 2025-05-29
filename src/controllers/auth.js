import { request, response } from "express";

import { enviarMensaje } from "../helpers/mailer.js";
import user from "../models/user.js";
export const Login = (req = request, res = response) => {
  return res.send("Login");
};

export const generateCode = (req = request, res = response) => {
  const { email } = req.params;

  const findUser = user.findOne({ email });

  if(!findUser) return res.status(400).json({"mensaje": "Usuario no existe"})

  enviarMensaje(
    email,
    "Codigo de ingreso sistema VENTAS",
    "<h1>Codigo para ingresa: </h1>"
  );
};
