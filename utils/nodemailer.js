import nodemailer from 'nodemailer'

const user = process.env.NEXT_PUBLIC_CONTACT_EMAIL
const pass = process.env.NEXT_PUBLIC_CONTACT_PASSWORD

export const transporter = nodemailer.createTransport({
    service: 'Outlook365',
    host: 'smtp.office365.com',
    port: '587',
    auth: {
        user: user,
        pass: pass
    },
    tls: {
        ciphers: 'SSLv3',
        rejectUnauthorized: false
    }
})

export const mailOptions = {
    from: user,
    to: user
}