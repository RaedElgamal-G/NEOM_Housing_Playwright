export function generateRandomData(testerName) {
    const randomNumber = Math.floor(Math.random() * 1000); // Generates a number between 0 and 999
    return `${testerName}${randomNumber}`;
}

//Generate a random string consisting of letters only
export function generateDataRandomly() {
    const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    let randomString = '';
    for (let i = 0; i < 10; i++) {
        randomString += letters.charAt(Math.floor(Math.random() * letters.length));
    }
    return randomString;
}


  // Generate random numbers from 1 to 99
    export function generateRandomNumbers() {
        let randomNumber = Math.floor(Math.random() * 99) + 1;
        console.log(randomNumber);
        return randomNumber.toString()
    }




