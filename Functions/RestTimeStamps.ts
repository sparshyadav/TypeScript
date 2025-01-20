// Write a function that logs a message starting with a timestamp and accepts additional message parts as rest elements.

function logMessage(str: string, ...arr: number[]): void {
    console.log(str);
    arr.forEach((num) => {
        console.log(num);
    });
}

logMessage("Sparsh", 43, 23, 64, 23, 6);