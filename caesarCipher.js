
let someStr = '3qbpq'
let caesarCipher = (testStr) => {
    ans = "";
    let jumpNum =  Number(testStr[0]);
    for(let i = 1; i < testStr.length; i++){
    let strValue = testStr[i].charCodeAt() + jumpNum;
    ans+= String.fromCharCode(strValue);
    } 
    return ans;
}
console.log(caesarCipher(someStr))
