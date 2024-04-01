import inquirer from "inquirer";

let mybalance = 10000;
let mypin = 3952;

let pinAnswer = await inquirer.prompt([
  { name: "pin", message: "Enter Your Pin:", type: "number" },
]);

if (pinAnswer.pin === mypin) {
  console.log("Correct Pin Code!!!");

  let operationAns = await inquirer.prompt([
    {
      name: "operation",
      message: "Please Select Option:",
      type: "list",
      choices: ["Withdraw", "Fast Cash", "Check Balance"],
    },
  ]);

  if (operationAns.operation === "Withdraw") {
    let amountAns = await inquirer.prompt([
      { name: "amount", message: "Enter Your Amount:", type: "number" },
    ]);
    mybalance -= amountAns.amount;
    if(amountAns.amount >= mybalance){
      console.log("You have not sufficient balance");
    }else{

      console.log("Your remaining balance is: " + mybalance);     
    }
  } else if (operationAns.operation === "Fast Cash") {
    let fastcashAns = await inquirer.prompt([
      {
        name: "cash",
        message: "Please Select Cash:",
        type: "list",
        choices: ["500", "1000", "2000", "3000", "5000", "10000"],
      },
    ]);

    mybalance -= fastcashAns.cash;
    console.log("Your remaining balance is: " + mybalance);
  } else if (operationAns.operation === "Check Balance") {
    console.log("Your balance is: " + mybalance);
  }
} else {
  console.log("Incorrect Pin Code");
}
