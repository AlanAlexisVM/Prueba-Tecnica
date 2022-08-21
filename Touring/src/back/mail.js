import nodemailer from 'nodemailer';

const enviarMail = async() => {
    const config = {
        host: 'smtp.gmail.com',
        port: 587,
        secure: false,
        auth: {
            user: 'alexisomg99@gmail.com',
            pass: 'bdqgwscsmyhalbdb'
        }
    }

    const mensaje = {
        from: 'alexisomg99@gmail.com',
        to: 'alexisvelasco99@outlook.es',
        subject: 'Usuario nuevo registrado',
        text: 'El usuario ' +  '' + 'ha sido registrado.'
    }

    const transport = nodemailer.createTransport(config);
    const info = await transport.sendMail(mensaje);
}

export default enviarMail;