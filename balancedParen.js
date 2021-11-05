// Given a string, return true or false depending on whether that string has balanced parentheses.

// For the purposes of this problem, you only need to worry about parentheses ( and ), not other opening-and-closing marks, like curly brackets, square brackets, or angle brackets.
// For example:

// >>> has_balanced_parens("()") // true

// >>> has_balanced_parens("(Oh Noes!)(")// false

// >>> has_balanced_parens("((There's a bonus open paren here.)") // false
// >>> has_balanced_parens(")") // false
// >>> has_balanced_parens("(") // false
// >>> has_balanced_parens("(This has (too many closes.) ) )") // false

// You may consider a string with no parentheses balanced:
// >>> has_balanced_parens("Hey...there are no parens here!") // true

let has_balanced_parens = (str) => {
    let balArr = []; //initializes an empty array to evaluate str through
    for (i = 0; i < str.length; i++){ 
        let lastChar = balArr[balArr.length-1] //This creates var for the last element in the array
        if(str[i] =="("){
            balArr.push(str[i])
        }
        else if (str[i] == ")" && lastChar == "(") {
            balArr.pop();//
        } else return false;
    }
    return balArr.length ? false : true 
}
has_balanced_parens("(somestr)wi(a)val)");

// let has_balanced_parens = (str) => {
//   let openPar = 0; //initializes an empty array to evaluate str through
//   let closedPar = 0; //initializes an empty array to evaluate str through
//   for (i = 0; i < str.length; i++){ 
//       if(str[i] =="("){
//           openPar += 1;
//       }
//       else if (str[i] == ")") {
//           closedPar += 1;
//       }
//   }
//   return openPar === closedPar;
// }
// console.log(has_balanced_parens("(somestr)wi(a)val)"));