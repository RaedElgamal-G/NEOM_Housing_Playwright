export function generateRandomData(testerName) {
    const randomNumber = Math.floor(Math.random() * 1000); // Generates a number between 0 and 999
    return `${testerName}${randomNumber}`;
}