//sync const prompt, which is a prompt function for the user to input
const prompt = require("prompt-sync")()
//declaring the value being passed in the prompt method
let grade = prompt("Please Enter your term marks; ")
//Function declaration with parameter grade
function studentGradeGenerator(grade){
    if(grade > 79 && grade <= 100){
        console.log()
        return "A"
    }else if(grade <=79 && grade >=60){
        return "B"
    }else if(grade <= 59 && grade >= 49){
        return "C"
    }else if(grade < 49 && grade >=40){
        return "D"
    }else if(grade >0 && grade < 40){
        return "E"
    }else{
        return "Please input a valid grading number!"
    }
}

console.log(studentGradeGenerator(grade))
//inputing arguments whenever prompted by the system.