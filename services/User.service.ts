
export async function changePassword(email: string, newPassword: string) {
    try {
        const response = await fetch('/api/user/change-password', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email, newPassword }),
        });

        const data = await response.json();

        if (response.ok) {
            return { status: 200, message: 'Password updated successfully' };
        } else {
            return { status: response.status, message: data.message || 'Failed to update password' };
        }
    } catch (error) {
        console.error('Error in changePassword API call:', error);
        return { status: 500, message: 'Internal server error' };
    }
}
