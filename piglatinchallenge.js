let englishStr = "How ya like them apples";

const pigLatinConverter = (str) => {

    let openArr = str.split(" "); //array containing each word based on spaces between them

    for(let i = 0; i < openArr.length; i++){
        let eachWord = openArr[i];
        //console.log(eachWord[0]);
        
        if((eachWord.startsWith('a')) || (eachWord.startsWith('e')) || (eachWord.startsWith('i')) || (eachWord.startsWith('o')) || (eachWord.startsWith('u'))){
            openArr[i] += 'yay';
            //console.log(eachWord); ///edit the pigWord to have yay
        } else {
            openArr[i] = openArr[i].slice(1) + openArr[i][0] + 'ay';
            //console.log(openArr[i])
            // move first to last - move vowel to the end and add ay
        }
    }
    let pigArr = openArr.join(' ');
 
    console.log(pigArr);  
    return pigArr;
}



pigLatinConverter(englishStr);
//
//const isPalindrome = (word) => [...word.replace(/[^a-zA-Z]/g, "")].reverse().join("") === word.replace(/[^a-zA-Z]/g, "");




//given a string, no punctuation all lower case
//ex "a sentence with words in it."
// if word starts with bcdfghjklmnpqrstvwxyz, then i will remove first letter from the front, then add that letter to the end, then add ay.
















