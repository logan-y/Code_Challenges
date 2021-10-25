// let hasMoreVowels = (word) => {
//     let vowelCount = 0;
//     //here is the logic for adding every vowel character to the count
//     let vowelArr = ['a','e','i','o','u','A','E','I','O','U']
//     //don't have to change word into array;
//     for(let i = 0; i < word.length; i++){
//         if(vowelArr.includes(word[i])){
//             vowelCount++;
//         }
//     }
//     if (vowelCount > word.length/2) {
//         return true;
//     } else return false;
// }

let hasMoreVowels2 = (word2) => {
  const vowels = /[AEIOUaeiou]/g;
  const vCount = word2.match(vowels);
  if(vCount.length > (word2.length/2)){
      return true;
  } else{
      return false;
  }
}
console.log(hasMoreVowels2('dOAEIogo'));