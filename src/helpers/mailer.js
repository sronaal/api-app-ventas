import { createTransport } from "nodemailer";

let transporter = createTransport({
  host: "smtp.gmail.com ",
  port: 465,
  secure: true,
  auth: {
    user: process.env.EMAIL,
    pass: process.env.EMAIL_PASSWORD,
  },
});

export const enviarMensaje = async (to, subject, html) => {
  try {
    const result = await transporter.sendMail({
      from: `Servicio Code ${process.env.EMAIL}`,
      subject,
      html,
    });
    console.log({ result });
    return { ok: true, mensaje: "Mensaje enviado con exito" };
  } catch (error) {
    return { ok: false, mensaje: `Error al enviar mensaje ${error}` };
  }
};
