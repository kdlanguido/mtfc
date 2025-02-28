import { EmailInfoI } from '@/constants/interfaces';
import { Resend } from 'resend';


const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
    try {
        const emailInfo: EmailInfoI = await request.json();
        const { data, error } = await resend.emails.send({
            from: 'MTFC Admin <onboarding@resend.dev>',
            to: ['alyastubigman@gmail.com'],
            subject: emailInfo.subject,
            html: emailInfo.html,
        });

        if (error) {
            return Response.json({ error }, { status: 500 });
        }

        return Response.json(data);
    } catch (error) {
        return Response.json({ error }, { status: 500 });
    }
}