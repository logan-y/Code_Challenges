
function hasUniqueChars(specialWord){
    for(let i = 0; i < (specialWord.length -1); i++){
            for (let j = i + 1; j < specialWord.length; j++) {
                if (specialWord[i] == specialWord[j]) {
                    return false;
                }
        }
        // If no duplicate characters encountered, return true
    }
     return true;
    }
let testWord = 'brute'
console.log(hasUniqueChars(testWord));