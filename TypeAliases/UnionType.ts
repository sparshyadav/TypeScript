type Status = "Success" | "Error" | "Loading";

function printStatus(status: Status): void {
    console.log("The Current Status is: ", status);
}

printStatus("Success");
printStatus("Error");