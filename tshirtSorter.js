
let tshirtSorter = str => {
    tshirtArr = str.split(''); //converts string into array
    var tempVar; //placeholder variable to switch elements around
    for(let i = 0; i < tshirtArr.length; i++){
        for(let j = i + 1; j < tshirtArr.length; j++){
          if(tshirtArr[i] < tshirtArr[j]){
               tempVar = tshirtArr[i];          //if the ascii code of tshirtArr[i] is less than tshirtArr[j], they will swap
               tshirtArr[i] = tshirtArr[j]      //the array is considered sorted reverse alphabetically s -> m -> l
               tshirtArr[j] = tempVar           //tempVar is used to switch i and j elements with each other
            }
        } 
    }
return tshirtArr.join(); //converts array back to string
}
console.log(tshirtSorter('ssmsslmll'));



// Write a function that will take in a string containing only s, m, and l characters. Ex: slsmmsllsmsmlmsls
// This string essentially represents a bunch of t-shirts in an unsorted pile. Your function should return this pile of t-shirts sorted by small, then medium, then large. 
//The above example would be returned sssssssmmmmmlllll.
// The given string will never include characters outside of the lowercase s, m, and l. The string will also never contain any spaces.
// >>> tshirtSorter('lms')
// // sml
// >>> tshirtSorter('smllms')
// // ssmmll

//EX with map and sort
// // the array to be sorted
// const data = ['delta', 'alpha', 'charlie', 'bravo'];

// // temporary array holds objects with position and sort-value
// const mapped = data.map((v, i) => {
//   return { i, value: someSlowOperation(v) };
// })

// // sorting the mapped array containing the reduced values
// mapped.sort((a, b) => {
//   if (a.value > b.value) {
//     return 1;
//   }
//   if (a.value < b.value) {
//     return -1;
//   }
//   return 0;
// });

// const result = mapped.map(v => data[v.i])