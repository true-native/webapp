import { NextResponse } from 'next/server';
import { mailOptions, transporter } from '../../../utils/nodemailer';

export async function POST(request) {
	const {
        name,
        email,
        subject,
        message,
    } = await request.json();

    if (!name || !email || !subject || !message) {
        return NextResponse.json({status: 500, message: 'Bad request'})
    }

	let response = null;

	try {
        await transporter.sendMail({
            ...mailOptions,
            subject: subject,
            html: `
                <div>
                    <p>Hello there,</p></br></br>
                    <p><strong>${name}</strong> just sent you a message from truenativeacai.com, regarding: <strong>${subject}</strong></p>
                    <strong>This is what they wrote: </strong></br></br>
                    <p>${message}</p></br></br>

                    <p>Here is their email: ${email}</p>
                </div>
            `,
            replyTo: email
        }).then((res) => {
            response = res
        })
	} catch (error) {
		response = error
	}

	return NextResponse.json(response)
}

