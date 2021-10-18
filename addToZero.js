

arr1 = [20, -5, 4, 45, 9, 0, -1, 10];
addsToZero = false;


for(let i = 0; i < arr1.length; i++){
    let num1 = arr1[i];
    for(let j = (i + 1); j < arr1.length; j++){
        if((num1 + arr1[j]) === 0){
        addsToZero = true;
        console.log("pair")
        }
        else;
    }
}


console.log(addsToZero);