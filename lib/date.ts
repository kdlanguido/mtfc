export const getCurrentDate = () => {
    const today = new Date();
    const year = today.getFullYear();
    const month = (today.getMonth() + 1).toString().padStart(2, '0'); // Ensure 2 digits for month
    const day = today.getDate().toString().padStart(2, '0'); // Ensure 2 digits for day
    return `${year}-${month}-${day}`;
};