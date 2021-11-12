// Deoxyribonucleic acid (DNA) is a chemical found in the nucleus of cells and carries the “instructions” for the development and functioning of living organisms.

// In DNA strings, symbols “A” and “T” are complements of each other, as are “C” and “G”.

// Write a function that takes in a string (one side of the DNA); it should return the other complementary side.

// For example:

// dnaStrand("ATTGC") --> "TAACG"

// dnaStrand("GTAT") --> "CATA"

let dnaStrands = (str) => {
    dnaArr = str.split("");
    newArr = [];
    dnaArr.forEach(e => {
        switch(e) {
            case 'A': newArr.push('T');
            break;
            case 'T': newArr.push('A')
            break;
            case 'G': newArr.push('C')
            break;
            case 'C': newArr.push('G')
            break;
        }
    });
    return newArr.join("");
}
console.log(dnaStrands('ATATGGGGCCGTGTATGC'));