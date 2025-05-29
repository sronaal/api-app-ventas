import { createTransport } from "nodemailer";

let transporter = createTransport({
  host: "smtp.gmail.com",
  port: 465,
  auth: {
    user: process.env.EMAIL || 'sronaalz21@gmail.com',
    pass: process.env.EMAIL_PASSWORD || 'flxt ebou qsgs yxge',
  },
});


export const enviarMensaje = async (to, subject, html) => {
  try {
    const result = await transporter.sendMail({
      to,
      from: `Servicio Code ${process.env.EMAIL}`,
      subject,
      html,
    });
    //console.log({ result });
    return { ok: true, mensaje: "Mensaje enviado con exito" };
  } catch (error) {
    console.log(error)
    return { ok: false, mensaje: `Error al enviar mensaje ${error}` };
  }
};
