
let arr = [1, 2, 13, 35, 6];
let prod = 0;
newArr = [];

const sortProd = (prodArr) => {
    for(let i = 1; i <= prodArr.length; i++){
        prod = arr[i-1] * i;
        newArr.push(prod)
        console.log(newArr)
    }
    newArr.sort(function(a, b){return a-b});
    return newArr;
}

sortProd(arr);
console.log(newArr);