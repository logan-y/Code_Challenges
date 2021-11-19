let phoneArr = [1,2,3,4,5,6,7,8,9,9];

const createNumber = (phoneArray) => {
    let mask = '(xxx) xxx-xxxx';

    phoneArray.forEach(item => {
        mask = mask.replace('x', item);
    })
    return mask;
};

console.log(createNumber(phoneArr))


// let cardInfo = '30980000022222';

// const maskify = (str) => {
//     numArr = str.split("");
//     console.log(numArr);
//     newArr = [];
//     for(let i = 0; i < numArr.length - 4; i++){
//         newArr.push('#')
//     }
//     for(let j = numArr.length - 5; j > numArr.length; j++ ){
//         newArr.push(numArr[j])
//     }
//     console.log(newArr);
    
// }

// maskify(cardInfo);



function MaskCharacter(str) {

    return ('' + str).slice(0, -4)
        .replace(/./g, "#")
        + ('' + str).slice(-4);
}
var strang = "29092082"
// Call function without giving value of n
console.log(MaskCharacter(strang));