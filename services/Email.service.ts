import { EmailInfoI } from "@/constants/interfaces";

export async function SendForgotPasswordEmail(emailInfo: EmailInfoI, code: Number) {
    try {

        const response = await fetch('/api/mailer', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                to: emailInfo.to,
                subject: emailInfo.subject,
                html: emailInfo.html,
            }),
        });

        if (!response.ok) {
            throw new Error(`Error: ${response.statusText}`);
        }

        return response;
    } catch (error) {
        console.error("Error sending email:", error);
    }
}

export async function SaveForgotPasswordCode(email: string, code: Number) {
    try {

        const response = await fetch('/api/user/change-password/save-code', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                code: code,
                email: email,

            }),
        });

        if (!response.ok) {
            throw new Error(`Error: ${response.statusText}`);
        }

        return response;
    } catch (error) {
        console.error("Error sending email:", error);
    }
}
