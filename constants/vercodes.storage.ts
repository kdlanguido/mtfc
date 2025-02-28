const verCodes = [
    1234,
    3125,
    4871,
    2469,
    5182,
    7931,
    6243,
    5721,
    9318,
    1406
];

export const randomCode = () => {
    return verCodes[Math.floor(Math.random() * verCodes.length)];
};
