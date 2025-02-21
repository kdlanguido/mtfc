import * as React from 'react';

export const ForgotPasswordEmailTemplate = ({ randomCode }: { randomCode: number }) => (
    <div>
        <h4>Hello, client!</h4>
        <p>It seems like you requested a password reset. No worries, we&apos;re here to help!</p>
        <p>To reset your password, please use the following 4-digit verification code &colon;</p>

        <p><strong>{randomCode}</strong></p>

        <p>If you didn&apos;t request this, please ignore this email.</p>

        <p>Best regards,</p>
        <p>Lazy Developers</p>
    </div>

);