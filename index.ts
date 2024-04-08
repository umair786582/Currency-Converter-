#! /usr/bin/env node
import inquirer from "inquirer";

const currancy: any = {
    USD: 1,
    EUR: 0.92,
    RIYAL: 3.75,
    IND: 83.31,
    PKR: 278
};

let user = await inquirer.prompt([
    {
    name: "from",
    message: "kindly enter from currancy",
    type: "list",
    choices: ["USD", "EUR", "RIYAL", "IND", "PKR"]
},
{
    name: "to",
    message: "kindly enter to currancy",
    type: "list",
    choices: ["USD", "EUR", "RIYAL", "IND", "PKR"]
},
{
    name: "amount",
    message: "kindly enter your amount",
    type: "number"

}
]);

let fromAmount =currancy[user.from]
let toAmount = currancy[user.to]
let amount = user.amount
let baseAmount = amount / fromAmount
let convertedAmount = baseAmount * toAmount
console.log("Your amount has converted successfully.");
console.log (convertedAmount);
