let phoneArr = [1,2,3,4,5,6,7,8,9,9];

const createNumber = (phoneArray) => {
    let mask = '(xxx) xxx-xxxx';

    phoneArray.forEach(item => {
        mask = mask.replace('x', item);
    })
    return mask;
};

console.log(createNumber(phoneArr))