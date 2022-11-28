//Declaring prompt
const prompt = require("prompt-sync")()

let speed = prompt("Enter your speed in km; ")

function carSpeed (){
    let points = ((speed -70) / 5)
    if (speed <= 70){
        return "Ok"
    } else if (speed > 70 && points <= 12){
        return `Points: ${points}`
    }else  { 
        return "License Suspended"
    }
}
console.log(carSpeed())
