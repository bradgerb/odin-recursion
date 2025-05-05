const fibs = (iteration, numOne = 0, numTwo = 1)=> {
    if (iteration <= 0){
        return
    } else {
        console.log(numOne)
        return fibs(iteration - 1, numTwo, numOne + numTwo);
    }
}

fibs(8);
