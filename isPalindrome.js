const isPalindrome = (word) => [...word.replace(/[^a-zA-Z]/g, "")].reverse().join("") === word.replace(/[^a-zA-Z]/g, "");


//example of palindrome from discord/eod review
// function isPal(input){
//     let j = input.length
//     for(let i = 0; i < (input.length / 2); i++){
//         j--;
//         if(input[i] !== input[j]){
//             return "Not a palidrome";
//         }

//         // console.log("i", i)
//         // console.log("j", j)
//     }
//     return "Yes, palindrome"
// }

// console.log(isPal("maddaM")) 