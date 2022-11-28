function studentGradeGenerator(grade){
    if(grade > 79 && grade <= 100){
        console.log()
        return "You got an A"
    }else if(grade <=79 && grade >=60){
        return "You got a B"
    }else if(grade <= 59 && grade >= 49){
        return "You got a C"
    }else if(grade < 49 && grade >=40){
        return "You got a D"
    }else if(grade >0 && grade < 40){
        return "You got a E"
    }else{
        return "Please input a valid grading number!"
    }
}

studentGradeGenerator(95)
