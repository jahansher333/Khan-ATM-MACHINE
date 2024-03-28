import inquirer from "inquirer";
console.log;
let mybalance = 9000;
let mypin = 1234;
let pincode = await inquirer.prompt([{
        name: "pin",
        type: "number",
        message: "Enter your pin code",
        //choices: ["withdraw ","cheak balnce"],
    },]);
if (pincode.pin === mypin) {
    console.log("Inter your correct pin code,");
    let operationanswers = await inquirer.prompt([
        {
            name: "operation",
            message: "Please select option",
            type: "list",
            choices: ["withdraw", "check balance"],
        }
    ]);
    if (operationanswers.operation === "withdraw") {
        let fastcase = await inquirer.prompt([{
                name: "typeamount",
                message: "Please select your amount",
                type: "list",
                choices: [1000, 2000, 5000, 10000, 15000, 25000, 50000],
            },
        ]);
        if (fastcase.typeamount > mybalance) {
            console.log("Insficiant Balance");
        }
        else {
            mybalance -= fastcase.typeamount;
            console.log(`you have withdraw rupess ${fastcase.typeamount} withdraw sucessfully`);
            console.log(`your remaining balance is: ${mybalance}`);
        }
    }
    ;
    if (operationanswers.operation === "check balance") {
        console.log(`Your balance is: ${mybalance} `);
    }
    ;
}
else {
    console.log("Incorrect pin code you enter correct pin code Try Agine?");
}
;
