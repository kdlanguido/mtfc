import * as React from 'react';

interface EmailTemplateProps {
    firstName: string;
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
    firstName,
}) => (
    <div>
        <h4>Welcome, {firstName}!</h4>
        <p>Tara buhat na!</p>
    </div>
);