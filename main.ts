import inquirer from "inquirer"
let mybalance = 10000;
let mypin = 1234;
let pinanswer=await inquirer.prompt(
    [{name:"pin",
    message:"enter your pin",
    type:"number"}
]

);
if(pinanswer.pin === mypin){
    console.log("you enter a corrrect pin")};

 let operationans=await inquirer.prompt(
    [{name:"operation",
    message:"what action do you want to perform",
    type:"list",
    choices:["withdraw","check balance","fast cash"]}]);
if(operationans.operation=== "withdraw")
 let amountans=await inquirer.prompt([{
    name:"amount",
    mesaage:"enter your amount",
    type:"number"
    }]);
    mybalance -= amountans.amount
    console.log("your remaining balance is" +mybalance);
else if(amountans.amount>=mybalance)
    console.log("your amount is insufficient");  
else if(operationans.operation==="check balance")
    console.log("your balance is "+mybalance); 
else if(operationans.operation=="fast cash")
   let fastcashamount=await inquirer.prompt([{
    name:"fast cash",
    message:"what amount you want to with draw",
    type:"list",
    choices:[
        "1000",
        "3000",
        "5000"
    ]

}]);
console.log("your fast cash is"+fastcashamount )
else{
    console.log("your pin is incorrect")};











