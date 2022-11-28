//Declaring prompt
//initialise prompt sunc
const prompt = require("prompt-sync")()
//declaring the value to be passed at the prompt
let speed = prompt("Enter your speed in Km/hr; ")
//function declaration; function name carSpeed using if, else if, else to declare the necessary conditions
function carSpeed (){
    let points = Math.floor(((speed -70) / 5))
    if (speed <= 70){
        return "Ok"
    } else if (speed > 70 && points <= 12){
        return `Points: ${points}`
    }else  { 
        return "License Suspended"
    }
}
console.log(carSpeed())

