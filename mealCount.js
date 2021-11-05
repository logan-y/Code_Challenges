var list1 = [
    { firstName: 'Noah', lastName: 'M.', country: 'Switzerland', continent: 'Europe', age: 19, language: 'C',
        meal: 'vegetarian' },
    { firstName: 'Anna', lastName: 'R.', country: 'Liechtenstein', continent: 'Europe', age: 52, language: 'JavaScript',
        meal: 'standard' },
    { firstName: 'Ramona', lastName: 'R.', country: 'Paraguay', continent: 'Americas', age: 29, language: 'Ruby',
        meal: 'vegan' },
    { firstName: 'George', lastName: 'B.', country: 'England', continent: 'Europe', age: 81, language: 'C',
        meal: 'vegetarian' },
    ];
//var devMeeting = [3,2,3,2,1,3,2,3,2,3,2,3,3,3,3,3,1,3,2,2,3,3] //input array with food options as number entries.
let mealCount = (input) => {
    var foodList = { //obj to return
        vegan: 0,
        vegetarian: 0,
        standard: 0
    }
    for(let i = 0; i < input.length; i++){
    switch (input[i].meal) {
        case 'vegan':
            foodList.vegan++;
            break;
        case 'vegetarian':
            foodList.vegetarian++;
            break;
        case 'standard':
            foodList.standard++;
            break;
        default:
            console.log(`incorrect input`)
    }
}
return foodList;
}
console.log(mealCount(list1))