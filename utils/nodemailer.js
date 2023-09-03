import nodemailer from 'nodemailer'

const user = process.env.NEXT_PUBLIC_CONTACT_EMAIL
const pass = process.env.NEXT_PUBLIC_CONTACT_PASSWORD

export const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: user,
        pass: pass
    }
})

export const mailOptions = {
    from: user,
    to: user
}