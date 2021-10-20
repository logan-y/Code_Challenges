//This is the fizzbuzz challenge from 10/14

for(i = 0; i < 30; i++){
    if(((i +1) % 3) == 0 && ((i +1) % 5) == 0){
        console.log("Fizzbuzz")
    } else if(((i +1) % 3) == 0){
        console.log("Fizz")
    } else if(((i + 1) % 5) === 0){
        console.log("Buzz")
    } else{
        console.log(i+1)
    }
}